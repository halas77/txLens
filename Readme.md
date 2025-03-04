# **TxLens - AI-Powered Blockchain Explorer Insights**

TxLens is an open-source browser extension that enhances blockchain explorers like **Etherscan** by providing AI-powered summaries and insights for transactions and wallet addresses. It simplifies complex blockchain data, making it easier to understand for both beginners and experienced users.

## **🚀 Features**

- 📌 **Transaction Insights** – Get AI-generated summaries for any Ethereum transaction.
- 🔍 **Wallet Analysis** – See key details about wallet balances, contract verification, and activity.
- ⚡ **Seamless Integration** – Works directly on **Etherscan**, displaying insights in real time.
- 🛡️ **Risk Indicator** – Highlights risky transactions and suspicious activities.
- 🔄 **Multi-Network Support** – Extendable to **other EVM-compatible chains**.

---

## **📥 Installation**

### **From Source (Development Mode)**
```sh
# Clone the repository
git clone https://github.com/halas77/txlens.git
cd txlens

# Install dependencies
npm install

# Build the project
npm run build
```

### **Load the Extension in Chrome**
1. Open `chrome://extensions/`
2. Enable **Developer Mode** (top-right corner)
3. Click **Load unpacked** and select the `dist` folder

---

## **🛠️ Usage**

1. Navigate to **[Etherscan](https://etherscan.io/)**.
2. Open any **transaction (`/tx/..`)** or **wallet (`/address/..`)** page.
3. TxLens will automatically summarize and display insights!

---

## **🔧 Tech Stack**
- **Frontend:** React, Tailwind CSS
- **Scraping & Data Extraction:** DOM Parsing, Etherscan API
- **AI Integration:** Gemini (optional for enhanced summaries)
- **Browser Extension Framework:** Manifest V3

---

## **🛡️ Security & Privacy**
- TxLens **does not store or transmit user data**.
- API calls are made **locally** within the browser.
- No wallet access or private keys are required.

---

## **🤝 Contributing**
We welcome contributions! To contribute:
```sh
# Fork the repository
# Create a new branch (feature/your-feature)
# Commit your changes and push them
# Submit a Pull Request
```

## **📬 Contact**
For questions, suggestions, or issues:
- Open an issue on [GitHub Issues](https://github.com/halas77/txlens/issues)
- Reach out on **Twitter**

🚀 **Enjoy simplified blockchain insights with TxLens!**

