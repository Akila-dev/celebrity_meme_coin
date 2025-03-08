import {
	mobile,
	backend,
	web,
	dexscreener,
	dextools,
	coinmarketcap,
	coingecko,
	etherscan,
	git,
	teammate1,
	teammate2,
	teammate3,
} from '../assets';

import { BsTwitterX } from 'react-icons/bs';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export const navLinks = [
	{
		id: 'home',
		title: 'Home',
	},
	{
		id: 'dashboard',
		title: 'Dashboard',
	},
	{
		id: 'tokenomics',
		title: 'Tokenomics',
	},
	{
		id: 'faq',
		title: 'FAQ',
	},
];

export const socialLinks = [
	{
		name: 'telegram',
		url: 'https://t.me',
		icon: <FaTelegramPlane />,
	},
	{
		name: 'twitter',
		url: 'https://twitter.com',
		icon: <BsTwitterX />,
	},
	{
		name: 'instagram',
		url: 'https://www.instagram.com/',
		icon: <FaInstagram />,
	},
];

export const contactLinks = [
	{
		name: 'mail',
		label: 'info@mail.xyz',
		url: 'https://info@mail.xyz',
	},
];

const tokenomics = [
	{
		title: 'Supply',
		value: '21.000.000',
		icon: web,
	},
	{
		title: 'Contract',
		value: '0x569YT04Y788d4d6C294A2ghBT4567F7627c0Be88',
		icon: mobile,
	},
	{
		title: 'Symbol',
		value: '$CELMC',
		icon: backend,
	},
];

const LOGOS = [
	{
		name: 'Coinmarketcap',
		icon: coinmarketcap,
	},
	{
		name: 'Coingecko',
		icon: coingecko,
	},
	{
		name: 'Dexscreener',
		icon: dexscreener,
	},
	{
		name: 'Dextools',
		icon: dextools,
	},
	{
		name: 'Etherscan',
		icon: etherscan,
	},
	{
		name: 'Github',
		icon: git,
	},
];

const roadmap = [
	{
		title: 'Phase 1',
		subheading: 'Launch Sequence',
		iconBg: '#383E56',
		date: 'March 2020 - April 2021',
		points: [
			' Deploy Contract',
			'Launch',
			'Achieve 200 Holders',
			'Establish Social Networks',
			'Update Dextools',
			'Execute Half Token Phase 1',
		],
	},
	{
		title: 'Phase 2',
		subheading: 'Growth Phase',
		iconBg: '#383E56',
		date: 'Jan 2021 - Feb 2022',
		points: [
			' Engage Influencers',
			'Undergo Contract Audit',
			'Trend on Twitter',
			'Attain Listings on Coingecko and CoinMarketCap',
			'Reach 1000 Holders',
			'Implement Half Token Phase 2',
		],
	},
	{
		title: 'Phase 3',
		subheading: 'Expansion  Phase',
		iconBg: '#383E56',
		date: 'Jan 2022 - Jan 2023',
		points: [
			'Surpass 2500 Holders',
			'Achieve 5M Market Cap',
			'Trend on Dexstools',
			'Secure CEX Listing',
			'Conduct  Giveaways',
			'Trend on Coingecko Trending and CoinMarketCap',
			'Initiate Half Token Phase 3',
		],
	},
	{
		title: 'Phase 4',
		subheading: 'Maturity Phase',
		iconBg: '#383E56',
		date: 'Jan 2023 - Present',
		points: [
			'Facilitate Buy Contests',
			'Perform Regular Burns',
			'Forge Partnerships',
			'Sustain Marketing Initiatives',
			'Maintain Community Engagement',
			'Pursue Further Listings',
			'Advance Half Token Phase 4',
		],
	},
];

const team = [
	{
		name: 'MickeB',
		designation: 'Co-Dev',
		image: teammate1,
	},
	{
		name: 'HalvingMaster',
		designation: 'Co-Dev',
		image: teammate3,
	},
	{
		name: 'BTCMAXI',
		designation: 'Marketing',
		image: teammate2,
	},
];

const FAQ = [
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [],
	},
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [],
	},
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
	},
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [],
	},
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [],
	},
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [],
	},
	{
		title: 'What is Celebrity Meme Coin?',
		content: [
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
			'Lorem ipsum dolor sit amet. Qui natus voluptas et quia alias hic iusto illum cum ipsam enim quo consequatur neque quo animi officia.',
		],
		listHeader: '',
		list: [],
	},
];

export { tokenomics, LOGOS, roadmap, team, FAQ };
