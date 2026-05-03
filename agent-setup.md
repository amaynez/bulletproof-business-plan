# AI Agent Setup Instructions

This file is intended for AI Agents (Claude Code, Gemini CLI, Cursor, etc.) to understand how to install and configure this skill.

## Installation Instructions

To install the **bulletproof-skill**, copy the contents of the `skills/bullet-proof-business-plan/` directory to the appropriate location for your environment:

### 1. Claude Code
- **Target Directory**: `~/.claude/skills/bullet-proof-business-plan/`
- **Action**: Create the directory if it doesn't exist and copy all files from `skills/bullet-proof-business-plan/` into it.

### 2. Gemini CLI
- **Target Directory**: `~/.gemini/skills/bullet-proof-business-plan/` (Global) OR `.gemini/skills/bullet-proof-business-plan/` (Local Project)
- **Action**: Copy all files from `skills/bullet-proof-business-plan/` into the target directory.

### 3. Cursor
- **Target Directory**: `~/.cursor/skills/bullet-proof-business-plan/`
- **Action**: Copy all files from `skills/bullet-proof-business-plan/` into the target directory.

### 4. OpenCode
- **Target Directory**: `~/.config/opencode/skills/bullet-proof-business-plan/` (Global) OR `.opencode/skills/bullet-proof-business-plan/` (Local Project)
- **Action**: Copy all files from `skills/bullet-proof-business-plan/` into the target directory.
- **Activation**: Use the `/skills` command in the OpenCode chat to verify the skill is loaded.

### 5. Other Agents (Cline, Windsurf, Roo Code)
- **Target Directory**: `.skills/bullet-proof-business-plan/` (Project Root)
- **Action**: Copy all files from `skills/bullet-proof-business-plan/` into the project's local `.skills/` folder.

---

## Activation
After copying the files, the user may need to restart their agent or refresh the environment for the skill to be recognized.
Once installed, the agent will have access to the `bullet-proof-business-plan` skill tools and instructions.
