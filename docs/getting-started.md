# Getting Started with Lightspeed MCP Server

This guide walks you through installing and configuring the Lightspeed MCP Server with various AI tools and LLM clients.

> **Looking for API documentation?** See the main [README.md](../README.md) for available tools and API coverage.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Lightspeed API Credentials](#getting-lightspeed-api-credentials)
- [Configuration by Tool](#configuration-by-tool)
  - [Claude Desktop](#claude-desktop)
  - [Claude Code (CLI)](#claude-code-cli)
  - [Cursor](#cursor)
  - [VS Code with Continue.dev](#vs-code-with-continuedev)
  - [Gemini CLI](#gemini-cli)
  - [ChatGPT (Developer Mode)](#chatgpt-developer-mode)
  - [Grok (xAI)](#grok-xai)
- [Verifying Your Setup](#verifying-your-setup)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js** v18 or later (some tools include built-in Node.js)
- A **Lightspeed Retail (X-Series)** account with API access
- The AI tool of your choice installed

## Installation

### Option 1: NPM (Recommended)

The easiest way to install - no manual setup required:

```bash
# Use directly with npx (no installation needed)
npx lightspeed-xseries-mcp

# Or install globally
npm install -g lightspeed-xseries-mcp
```

### Option 2: From Source

For development or customization:

```bash
# Clone the repository
git clone https://github.com/lightspeed-skhattane/lightspeed-xseries-mcp.git
cd lightspeed-xseries-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

After building, note the path to `dist/index.js` - you'll need this for configuration.

## Getting Lightspeed API Credentials

1. Log in to your [Lightspeed Retail (X-Series)](https://retail.lightspeed.app) account
2. Navigate to **Setup** > **Personal Tokens**
3. Click **Add a Personal Token**
4. Give it a descriptive name (e.g., "MCP Server")
5. Copy the generated token (starts with `lsxs_pt_`)
6. Note your store's domain prefix (from `your-store.retail.lightspeed.app`)

### Required Scopes

Depending on your use case, ensure your token has these scopes:

| Scope | Purpose |
|-------|---------|
| `customers:read/write` | Customer management |
| `products:read/write` | Product management |
| `sales:read/write` | Sales and transactions |
| `inventory:read/write` | Inventory management |
| `outlets:read` | Store locations |
| `registers:read` | POS terminals |

---

## Configuration by Tool

### Claude Desktop

Claude Desktop supports MCP servers natively through a configuration file.

**Configuration file location:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

**Steps:**

1. Open Claude Desktop
2. Go to **Settings** (gear icon) > **Developer** tab
3. Click **Edit Config**
4. Add the following configuration:

**Using NPM (Recommended):**

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

**Using local build (from source):**

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "node",
      "args": ["/absolute/path/to/lightspeed-xseries-mcp/dist/index.js"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

5. Save the file and **restart Claude Desktop completely**
6. Look for the **hammer/tools icon** in the bottom-right corner to confirm the server is connected

**Alternative: Desktop Extensions (.mcpb)**

Claude Desktop also supports one-click installation via `.mcpb` bundles. Check the [Anthropic Desktop Extensions documentation](https://www.anthropic.com/engineering/desktop-extensions) for more details.

> **Reference**: [Claude Desktop MCP Setup](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)

---

### Claude Code (CLI)

Claude Code can configure MCP servers via CLI commands or configuration files.

**Method 1: CLI Command (Recommended)**

```bash
# Add the server globally (available in all projects)
claude mcp add lightspeed --scope user -- npx -y lightspeed-xseries-mcp

# Set environment variables
export LIGHTSPEED_DOMAIN_PREFIX="your-store"
export LIGHTSPEED_ACCESS_TOKEN="lsxs_pt_your_token_here"
```

**Method 2: Configuration File**

Edit `~/.claude.json` and add:

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

**Method 3: Project-Level Configuration**

Create a `.mcp.json` file in your project root:

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

**Verify connection:**

```bash
# Inside Claude Code
/mcp
```

**Scope options:**
- `local` - Available only to you in the current project (default)
- `project` - Shared with everyone via `.mcp.json`
- `user` - Available to you across all projects

> **Reference**: [Claude Code MCP Documentation](https://code.claude.com/docs/en/mcp)

---

### Cursor

Cursor supports MCP servers through JSON configuration files.

**Configuration file locations:**
- **Global**: `~/.cursor/mcp.json`
- **Project-level**: `.cursor/mcp.json` in your project root

**Steps:**

1. Open Cursor
2. Press `Cmd/Ctrl + Shift + P` to open Command Palette
3. Search for **"MCP"** and select **"View: Open MCP Settings"**
4. Click **"Add Custom MCP"** to edit `mcp.json`
5. Add the following configuration:

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

6. Save and Cursor will automatically detect the MCP server
7. The tools will appear in the MCP Tools section

**Troubleshooting:**
- Press `Cmd/Ctrl + Shift + P` > **"Developer: Show Logs..."** to view MCP logs
- Use the MCP Inspector for debugging connection issues

> **Reference**: [Cursor MCP Documentation](https://cursor.com/docs/context/mcp)

---

### VS Code with Continue.dev

Continue.dev extension for VS Code supports MCP servers through YAML or JSON configuration.

**Configuration location:** `.continue/mcpServers/` directory in your workspace

**Steps:**

1. Install the [Continue extension](https://marketplace.visualstudio.com/items?itemName=Continue.continue) from VS Code Marketplace
2. Create the configuration directory:

```bash
mkdir -p .continue/mcpServers
```

3. Create a configuration file `.continue/mcpServers/lightspeed.yaml`:

```yaml
name: Lightspeed MCP Server
version: 0.0.1
schema: v1
mcpServers:
  - name: lightspeed
    command: npx
    args:
      - -y
      - lightspeed-xseries-mcp
    env:
      LIGHTSPEED_DOMAIN_PREFIX: your-store
      LIGHTSPEED_ACCESS_TOKEN: lsxs_pt_your_token_here
```

**Alternative: JSON Configuration**

Create `.continue/mcpServers/lightspeed.json`:

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      }
    }
  }
}
```

> **Important**: MCP tools are only available in Continue's **Agent mode**.

> **Reference**: [Continue.dev MCP Documentation](https://docs.continue.dev/customize/deep-dives/mcp)

---

### Gemini CLI

Google's Gemini CLI supports MCP servers through the `settings.json` configuration file.

**Configuration file location:** `~/.gemini/settings.json`

**Steps:**

1. Install Gemini CLI:

```bash
npm install -g @anthropic-ai/gemini-cli
# or
brew install gemini-cli
```

2. Create or edit `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "your-store",
        "LIGHTSPEED_ACCESS_TOKEN": "lsxs_pt_your_token_here"
      },
      "timeout": 30000
    }
  }
}
```

**Configuration options:**

| Property | Type | Description |
|----------|------|-------------|
| `command` | string | Executable path (for stdio transport) |
| `args` | string[] | Command-line arguments |
| `env` | object | Environment variables (supports `$VAR_NAME` syntax) |
| `timeout` | number | Request timeout in ms (default: 600,000) |
| `trust` | boolean | Bypass tool confirmation dialogs |

**Using environment variables:**

```json
{
  "mcpServers": {
    "lightspeed": {
      "command": "npx",
      "args": ["-y", "lightspeed-xseries-mcp"],
      "env": {
        "LIGHTSPEED_DOMAIN_PREFIX": "$LS_DOMAIN",
        "LIGHTSPEED_ACCESS_TOKEN": "$LS_TOKEN"
      }
    }
  }
}
```

Then set in your shell:
```bash
export LS_DOMAIN="your-store"
export LS_TOKEN="lsxs_pt_your_token_here"
```

> **Reference**: [Gemini CLI MCP Documentation](https://geminicli.com/docs/tools/mcp-server/)

---

### ChatGPT (Developer Mode)

ChatGPT supports MCP servers through Developer Mode (beta feature). Note that ChatGPT only supports **remote MCP servers** via SSE or HTTP streaming - local stdio servers are not directly supported.

**Requirements:**
- ChatGPT Pro, Plus, Business, Enterprise, or Education account
- Access to ChatGPT web interface

**To use with ChatGPT, you'll need to:**

1. **Deploy the MCP server as a remote service** (e.g., using a cloud provider)
2. Expose the server via HTTP with SSE or streaming HTTP transport
3. Enable Developer Mode:
   - Go to **Settings** > **Apps** > **Advanced settings**
   - Enable **Developer mode**
4. Create an App:
   - Click **"Create app"**
   - Enter your remote MCP server URL
   - Configure authentication if required

**Supported configurations:**
- **Protocols**: SSE and Streaming HTTP
- **Authentication**: OAuth, No Auth, or Mixed

**Example remote server URL:**
```
https://your-server.com/mcp
```

> **Note**: Setting up a remote MCP server requires additional infrastructure. Consider using services like Railway, Fly.io, or AWS Lambda with API Gateway.

> **Reference**: [ChatGPT Developer Mode](https://platform.openai.com/docs/guides/developer-mode)

---

### Grok (xAI)

Grok supports remote MCP servers through the xAI API. Like ChatGPT, it requires a **remote MCP server** accessible via HTTP.

**Requirements:**
- xAI API key
- xAI Python SDK v1.4.0 or later
- Remote MCP server deployment

**Installation:**

```bash
pip install xai-sdk>=1.4.0
```

**Usage in Python:**

```python
import os
from xai_sdk import Client
from xai_sdk.tools import mcp

client = Client(api_key=os.getenv("XAI_API_KEY"))

chat = client.chat.create(
    model="grok-4-1-fast",
    tools=[
        mcp(
            server_url="https://your-lightspeed-mcp-server.com/mcp",
            server_label="lightspeed",
            server_description="Lightspeed Retail API integration"
        ),
    ],
)

response = chat.send("List all my customers")
print(response.message)
```

**Using OpenAI-compatible API:**

```python
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("XAI_API_KEY"),
    base_url="https://api.x.ai/v1"
)

response = client.chat.completions.create(
    model="grok-4-1-fast",
    messages=[{"role": "user", "content": "List all my products"}],
    tools=[
        {
            "type": "mcp",
            "server_url": "https://your-lightspeed-mcp-server.com/mcp",
            "server_label": "lightspeed",
        }
    ]
)
```

**Configuration options:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `server_url` | Yes | MCP server endpoint URL |
| `server_label` | No | Identifier for the server |
| `server_description` | No | Description of the server's purpose |
| `allowed_tool_names` | No | Restrict to specific tools |
| `authorization` | No | Bearer token for auth |

> **Reference**: [xAI Remote MCP Tools](https://docs.x.ai/docs/guides/tools/remote-mcp-tools)

---

## Verifying Your Setup

After configuration, verify your setup by asking your AI assistant:

```
List all my Lightspeed customers
```

or

```
Show me my recent sales
```

The assistant should be able to fetch data from your Lightspeed account.

## Troubleshooting

### Common Issues

**"Connection closed" or "Server not responding"**
- Verify Node.js v18+ is installed and accessible (`node --version`)
- If using npx, ensure npm is working correctly (`npx --version`)
- If using local build, ensure the path to `dist/index.js` is absolute, not relative
- Check that the server builds successfully with `npm run build`

**"Authentication failed"**
- Verify your `LIGHTSPEED_ACCESS_TOKEN` is correct
- Ensure the token has the required scopes
- Check that `LIGHTSPEED_DOMAIN_PREFIX` matches your store URL

**"Command not found" on Windows**
- Use `cmd /c` wrapper for npx commands:
  ```json
  "command": "cmd",
  "args": ["/c", "npx", "-y", "lightspeed-xseries-mcp"]
  ```

**Tools not appearing**
- Restart the AI tool completely (quit and reopen)
- Check the tool's MCP logs for error messages
- Verify JSON syntax in configuration files

### Getting Help

- Check the [main README](../README.md) for API documentation
- Review tool-specific documentation linked in each section
- Open an issue on the [GitHub repository](https://github.com/lightspeed-skhattane/lightspeed-xseries-mcp/issues)

---

## Quick Reference

| Tool | Config Location | Transport |
|------|-----------------|-----------|
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` | stdio |
| Claude Code | `~/.claude.json` or `.mcp.json` | stdio |
| Cursor | `~/.cursor/mcp.json` or `.cursor/mcp.json` | stdio |
| Continue.dev | `.continue/mcpServers/` | stdio |
| Gemini CLI | `~/.gemini/settings.json` | stdio |
| ChatGPT | Web UI (Developer Mode) | HTTP/SSE (remote only) |
| Grok | API integration | HTTP/SSE (remote only) |
