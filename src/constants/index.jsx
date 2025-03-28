import { mobile, backend, web } from "../assets";

import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "how_to_buy",
    title: "How To Buy",
  },
  {
    id: "tokenomics",
    title: "Tokenomics",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const socialLinks = [
  {
    name: "telegram",
    url: "https://t.me",
    icon: <FaTelegramPlane />,
  },
  {
    name: "twitter",
    url: "https://twitter.com",
    icon: <BsTwitterX />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
];

export const contactLinks = [
  {
    name: "mail",
    label: "info@mail.xyz",
    url: "https://info@mail.xyz",
  },
];

export const accountData = [
  {
    label: "Ammount Spent ($)",
    value: "0.0",
  },
  {
    label: "Ammount Spent ($)",
    value: "0.0",
  },
  {
    label: "Ammount Spent ($)",
    value: "0.0",
  },
  {
    label: "Ammount Spent ($)",
    value: "0.0",
  },
];

export const howToGetGLOW = [
  "Create an account on Pump.fun",
  "Fill out the form below to see the required ammount of $SOL needed for the $GLOW you wish to purchase.",
  "Purchase the required ammount of $SOL (Purchase the $SOL into your Pump.fun wallet).",
  "After Receiving the $SOL in your pump.fun wallet, you can then purchase your $GLOW tokens with $SOL on the Pump.fun platform.",
];

export const tokenomics = [
  {
    title: "Market Cap",
    value: "$3,439",
    icon: web,
  },
  {
    title: "Contract",
    value: "tiKGR3g3RPuetcAaGJwMDhhYbY85TABCedKnugypump",
    icon: mobile,
  },
  {
    title: "Symbol",
    value: "$GLOW",
    icon: backend,
  },
];

export const FAQ = [
  {
    title: "What is the Celebrity Meme Coin?",
    content: [
      "It's a fun, community-driven token tied to celebrity vibes, built on the Solana blockchain. Think of it as a digital collectible with potential perks—your chance to own a piece of the action!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "Why do I need Phantom Wallet?",
    content: [
      "Phantom Wallet is your secure spot to hold Solana (SOL) and your meme coin. It's free, easy to set up, and connects directly to Pump.fun for buying—no extra accounts needed!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "How long does it take to buy Solana with a credit card?",
    content: [
      "Usually, SOL loads into your Phantom Wallet within seconds after approval. First-time buyers might need to verify their ID (KYC), which can take a few minutes to a day. If there's a delay, it could stretch to a few hours—just wait it out.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "What's this KYC thing I keep hearing about?",
    content: [
      "KYC (Know Your Customer) is a security check where you verify your ID to buy SOL with a credit card. It's a one-time step to keep things legit—takes a few minutes or up to a day, depending on the provider.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "Why is there a 4-6% fee when I buy SOL?",
    content: [
      "That's the convenience fee from the payment provider (like MoonPay) for letting you buy SOL instantly with a credit card. It's a trade-off for skipping the hassle of bank transfers or exchanges.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "How do I know I'm buying the real Celebrity Meme Coin on Pump.fun?",
    content: [
      "Always use the official “BUY TOKEN” link on celebritymemecoins.fun to go to Pump.fun. Double-check the token name and details on the page—scammers sometimes make fakes!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "What if my tokens don't show up after I buy them?",
    content: [
      "Tokens usually arrive in your Phantom Wallet within seconds. If the network's busy, it might take a few minutes. Check the 'Tokens' tab in Phantom—if they're still missing, reach out to us at [support link/email].",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "Can I buy the token without a credit card?",
    content: [
      "Yes! If you already have SOL, skip the credit card step—just send it to your Phantom Wallet from an exchange (like Coinbase or Binance) and head to Pump.fun to buy.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "What are these transaction fees on Pump.fun?",
    content: [
      "These are small network fees (usually under a dollar) for processing your purchase on the Solana blockchain. They're added to the SOL you spend—super tiny compared to the 4-6% credit card fee!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "Is this Celebrity Meme Coin legit, or just hype?",
    content: [
      "It's the real deal, backed by our team and community! We're all about fun and potential—check out celebritymemecoins.fun for more on what we're building. Like any crypto, it's a ride, so only join if you're in for it!",
    ],
    listHeader: "",
    list: [],
  },
];

export const FAQ4GURUS = [
  {
    title: "Do I still need Phantom Wallet if I have crypto?",
    content: [
      "Yes, Phantom Wallet is the easiest way to connect to Pump.fun and hold your meme coin. It's free—download it at phantom.app and transfer your crypto in.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "What crypto do I need to buy the Celebrity Meme Coin?",
    content: [
      "You'll need Solana (SOL) since the token runs on the Solana blockchain. If you have other coins (like ETH or BTC), swap them for SOL first—more on that below!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "How do I get SOL into my Phantom Wallet?",
    content: [
      "Open Phantom, find your wallet address (looks like a long string), and send SOL from your current wallet or exchange (e.g., Coinbase, Binance). It usually arrives in seconds—just double-check the address!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "Can I use crypto other than SOL on Pump.fun?",
    content: [
      "Nope, Pump.fun only takes SOL. If you've got ETH, BTC, or something else, swap it to SOL on an exchange or in Phantom (click 'Swap') before heading over.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "How do I buy the token if I already have SOL?",
    content: [
      "Click “BUY TOKEN” on celebritymemecoins.fun to go to Pump.fun. Connect Phantom via the top-right 'Connect Wallet' button, find the token, enter your SOL amount, and confirm. Done!",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "What's the deal with entering the amount on Pump.fun?",
    content: [
      "On the token page, hit 'Buy'. In the pop-up, type how much SOL you want to spend (e.g., 0.5 SOL) or how many tokens you want—it'll adjust the other number. Review the total (plus tiny fees), then click 'Confirm' and approve in Phantom.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "Are there fees if I'm using my own SOL?",
    content: [
      "No credit card fees here—just small Solana network fees (usually under a dollar) for the transaction. You'll see them before confirming on Pump.fun.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "How long does it take for tokens to show up in my wallet?",
    content: [
      "If you've got SOL ready, tokens hit your Phantom Wallet within seconds after approval. A busy network might delay it a few minutes—check the 'Tokens' tab to confirm.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "What if I sent SOL but don't see it in Phantom?",
    content: [
      "Ensure you sent it to the right Phantom address—mistakes can't be undone! If it's correct, wait a few minutes (network delays happen). Still missing? Contact your sending platform's support.",
    ],
    listHeader: "",
    list: [],
  },
  {
    title: "How do I make sure it's the real Celebrity Meme Coin?",
    content: [
      "Use the official “BUY TOKEN” link on celebritymemecoins.fun to reach Pump.fun. Verify the token name and details on the page—don't trust random links or copycats!",
    ],
    listHeader: "",
    list: [],
  },
];

export const HOW_TO_GET_GLOW = [
  {
    title: "Step 1: Download Phantom Wallet",
    content: [
      "You'll need a wallet to hold your crypto, and Phantom is the perfect choice—fast, free, and easy.",
    ],
    preHeaderList: [
      {
        title: "How to Get It",
        desc: "Click the link on this page or visit phantom.app.",
      },
      {
        title: "Installation",
        desc: "Download and install it on your phone or browser in about two minutes.",
      },
    ],
  },
  {
    title: "Step 2: Buy Solana (SOL) with Your Credit Card",
    content: [
      "Next, you'll load your Phantom Wallet with Solana (SOL) to use for buying the token.",
    ],
    preHeaderList: [
      {
        title: "Open Phantom",
        desc: "Launch the app or extension and click the 'Buy' button.",
      },
      {
        title: "Select SOL",
        desc: "Choose Solana (SOL) and pay with your credit card.",
      },
      {
        title: "First-Time Buyers",
        desc: "You might need to verify your ID (KYC) for security.",
        subList: [
          {
            title: "Timing",
            desc: "This can take a few minutes or up to a day, depending on the provider.",
          },
        ],
      },
      {
        title: "Funds Arrival",
        desc: "Once approved, SOL typically loads in seconds, but delays of a few hours are possible—just hang tight.",
      },
      {
        title: "Fees",
        desc: "Expect a 4-6% fee for the credit card convenience.",
      },
    ],
  },
  {
    title: "Step 3: Purchase Your Celebrity Meme Coin on Pump.fun",
    content: [
      "Now that your wallet has SOL, it's time to buy your meme coin on Pump.fun.",
    ],
    preHeaderList: [
      {
        title: "Get Started",
        desc: "Click the “BUY TOKEN” link on the Celebrity Meme Coin page—it'll take you to Pump.fun.",
      },
      {
        title: "Connect Wallet",
        desc: "On Pump.fun, find the 'Connect Wallet' button in the top right, click it, and select Phantom. Once connected, you're ready.",
      },
    ],
    listHeader: "How to Buy on Pump.fun:",
    list: [
      {
        title: "Locate the Token",
        desc: "On the token page, you'll see details like price, market cap, and a big 'Buy' button.",
      },
      {
        title: "Enter Your Amount",
        subList: [
          {
            desc: "Click 'Buy'—a transaction window will pop up.",
          },
          {
            desc: "You've got two options:",
            subList: [
              {
                desc: "Type in the amount of SOL you want to spend (e.g., 0.5 SOL) to see how many tokens you'll get.",
              },
              {
                desc: "Or, enter the number of tokens you want, and it'll calculate the SOL cost.",
              },
            ],
          },
          {
            desc: "Use the slider or input box to adjust until you're happy with the amount.",
          },
        ],
      },
      {
        title: "Review and Confirm",
        subList: [
          {
            desc: "Check the total SOL, including small transaction fees (usually tiny).",
            subList: [
              {
                desc: "If it looks good, click 'Buy' or 'Confirm' in the window.",
              },
            ],
          },
        ],
      },
      {
        title: "Approve in Phantom",
        desc: "",
        subList: [
          {
            desc: "Your Phantom Wallet will prompt you to approve the transaction—click 'Approve'.",
          },
          {
            desc: "Tokens should arrive in your wallet within seconds, assuming the network isn't busy.",
          },
        ],
      },
    ],
  },
];
