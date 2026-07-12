<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deployment (automatic)

- Live site: https://rabian-wangkeeree.vercel.app
- Pipeline: GitHub `rabianw/my-wep` (branch `main`) → Vercel project `rabian-wangkeeree` (personal account). Every `git push` auto-builds and deploys production (~30s). No manual deploy steps.
- Update workflow: edit files → `git add -A && git commit -m "..."` → `git push` (push must run from the user's own Terminal; credentials are in macOS keychain).
- Env vars: only `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is needed and already set in Vercel.
- Never commit `.env.local`; `.gitignore` already covers it.
