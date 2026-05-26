import re

def normalize_title(title):
    # Remove HTML tags, LaTeX formatting, braces, math symbols, spaces and punctuation
    title = re.sub(r'<[^>]+>', '', title)
    title = re.sub(r'\\[a-zA-Z]+', '', title)
    title = re.sub(r'[\{\}\\\$\-\_\:\,\.\s\(\)\'\’\”\“\"]', '', title)
    return title.lower()

def clean_authors(author_str):
    # Remove LaTeX formatting like \textbf{} or \underline{}
    author_str = re.sub(r'\\textbf\{([^\}]+)\}', r'\1', author_str)
    author_str = re.sub(r'\\underline\{([^\}]+)\}', r'\1', author_str)
    author_str = re.sub(r'[\{\}]', '', author_str)
    
    # Split by ' and '
    parts = [p.strip() for p in author_str.split(' and ')]
    
    cleaned_parts = []
    for part in parts:
        # Standardize spaces
        part = re.sub(r'\s+', ' ', part)
        cleaned_parts.append(part)
        
    if len(cleaned_parts) == 0:
        return ""
    elif len(cleaned_parts) == 1:
        return cleaned_parts[0]
    elif len(cleaned_parts) == 2:
        return f"{cleaned_parts[0]} & {cleaned_parts[1]}"
    else:
        return ", ".join(cleaned_parts[:-1]) + f", & {cleaned_parts[-1]}"

def extract_field_content(field_name, entry_text):
    # Find field_name = {
    match = re.search(r'\b' + field_name + r'\s*=\s*\{', entry_text, re.IGNORECASE)
    if not match:
        return None
    start_idx = match.end()
    # Count braces to find the matching closing brace
    brace_count = 1
    content = []
    for i in range(start_idx, len(entry_text)):
        char = entry_text[i]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                break
        content.append(char)
    return "".join(content)

# 1. Parse own-bib.bib
bib_path = '/Users/rabianwangkeeree/Downloads/CV_Rabian/own-bib.bib'
bib_content = open(bib_path, 'r', encoding='utf-8').read()

bib_data = {}
# Find positions of all entry starts
for match_entry in re.finditer(r'@[a-zA-Z]+\s*\{', bib_content):
    start_pos = match_entry.start()
    # Find the end of this entry by brace counting
    brace_count = 0
    end_pos = -1
    for i in range(start_pos, len(bib_content)):
        char = bib_content[i]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_pos = i + 1
                break
    
    if end_pos != -1:
        entry_text = bib_content[start_pos:end_pos]
        
        # Get key
        key_match = re.match(r'@[a-zA-Z]+\s*\{([^,]+),', entry_text, re.IGNORECASE)
        if key_match:
            key = key_match.group(1)
            author = extract_field_content('author', entry_text)
            title = extract_field_content('title', entry_text)
            
            if author and title:
                author_clean = author.replace('\n', ' ').strip()
                title_clean = title.replace('\n', ' ').strip()
                
                norm_title = normalize_title(title_clean)
                bib_data[norm_title] = {
                    'key': key,
                    'authors': clean_authors(author_clean),
                    'raw_title': title_clean
                }

print(f"Parsed {len(bib_data)} unique entries from BibTeX using brace counting.")

# 2. Parse and update mock-data.ts
mock_path = '/Users/rabianwangkeeree/Research Wep/src/lib/mock-data.ts'
mock_content = open(mock_path, 'r', encoding='utf-8').read()

pattern = r'(export\s+const\s+publicationsData:\s+Publication\[\]\s*=\s*\[)(.*?)(\n\];|\n\])'
match = re.search(pattern, mock_content, re.DOTALL)

if not match:
    print("Could not find publicationsData array in mock-data.ts")
    exit(1)

prefix = match.group(1)
array_content = match.group(2)
suffix = match.group(3)

# Parse individual publication objects in the array
obj_pattern = r'(\{\s*id:\s*"[^"]+",\s*title:\s*"(.*?)",\s*authors:\s*"(.*?)",.*?\s*\})'
matches = list(re.finditer(obj_pattern, array_content, re.DOTALL))

print(f"Found {len(matches)} publication objects in mock-data.ts")

updated_array_content = array_content
replacements = []

matched_count = 0
for m in matches:
    full_obj = m.group(1)
    title = m.group(2).replace('\n', ' ').strip()
    current_authors = m.group(3).strip()
    
    norm_title = normalize_title(title)
    
    if norm_title in bib_data:
        bib_authors = bib_data[norm_title]['authors']
        if current_authors != bib_authors:
            new_obj = full_obj.replace(f'authors: "{current_authors}"', f'authors: "{bib_authors}"')
            replacements.append((full_obj, new_obj))
            matched_count += 1

# Apply replacements in reverse to preserve string indices
for old_obj, new_obj in reversed(replacements):
    updated_array_content = updated_array_content.replace(old_obj, new_obj)

print(f"Updated {matched_count} publications with co-authors.")

# Write updated content back to mock-data.ts
new_mock_content = mock_content.replace(array_content, updated_array_content)
with open(mock_path, 'w', encoding='utf-8') as f:
    f.write(new_mock_content)

print("Finished syncing authors successfully.")
