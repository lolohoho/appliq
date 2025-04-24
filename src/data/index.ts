
import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon, CameraIcon, GlobeIcon, StoreIcon, ShoppingCartIcon } from "lucide-react";
import { ReactElement, ElementType } from "react";
// export interface TemplateProps {
//     target: string;
//     name: string;
//     id: number;
//     title: string;
//     des: string;
//     img: string;
//     iconLists: string[];
//     link: string;
//     goto: string;
//     priceplan: number;
//     cms: string;
//     cmsurl: string;
//     icon: ElementType;
//   }
export const templates = [
    {
        target: "Photographes",
        name: "galerie",
        id: 1,
        title: "Galerie Photo Responsive",
        des: "Découvrez une galerie d'images monopage entièrement responsive alimentée par le CMS Cloudinary. Parfaite pour exposer et vendre vos photos ou portfolios.",
        img: "/p1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://gallery.appliq.fr/",
        goto: "/templates/galerie",
        priceplan: 1,
        cms: "Cloudinary",
        cmsurl: "https://cloudinary.com/",
        icon: CameraIcon,
    },
    {
        target: "CV",
        name: "cv",
        id: 2,
        title: "CV 3D",
        des: "Découvrez un CV en ligne moderne, responsive et personnalisable, conçu pour valoriser votre parcours professionnel. Idéal pour développeurs, designers ou freelances souhaitant se démarquer.",
        img: "/p2.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://laurentremond.com/",
        goto: "/templates/cv",
        priceplan: 1,
        cms: "Sanity",
        cmsurl: "https://www.sanity.io/",
        icon: GlobeIcon,
    },
    {
        target: "ecomerce",
        name: "ecomerce",
        id: 3,
        title: "E Commerce",
        des: "Créez une boutique en ligne élégante et responsive, pensée pour vendre vos produits en toute simplicité. Interface fluide, design soigné, et gestion optimisée du catalogue",
        img: "/p3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "",
        goto: "/templates/ecomerce",
        priceplan: 2,
        cms: "Strapi",
        cmsurl: "https://strapi.io/",
        icon: ShoppingCartIcon,
    }
    ,
    {
        target: "Réseau Social",
        name: "social",
        id: 3,
        title: "Réseau Social",
        des: "Réseau social personnalisé développé avec Next.js, intégrant un système d'abonnement payant et la vente de produits dérivés",
        img: "/p4.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://shareclub.appliq.fr/",

        goto: "/templates/social",
        priceplan: 3,
        cms: "Inclu",
        cmsurl :"",
        icon: ShoppingCartIcon,
    }
    // {
    //   id: 2,
    //   title: "Yoom - Video Conferencing App",
    //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    //   img: "/p2.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    //   link: "/ui.yoom.com",
    // },
    // {
    //   id: 3,
    //   title: "AI Image SaaS - Canva Application",
    //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    //   img: "/p3.svg",
    //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    //   link: "/ui.aiimg.com",
    // },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "/ui.apple.com",
    // },
];

export const NAV_LINKS = [
    {
        title: "Templates",
        href: "/Templates",
        menu: templates.filter(tpl => tpl != null).map((tpl) => ({
            title: tpl.title,
            tagline: tpl.des,
            href: tpl.goto,
            icon: tpl.icon, // ou une icône personnalisée selon tpl si tu veux
        })),
        // menu: [
        //     {
        //         title: "Link Shortening",
        //         tagline: "Shorten links and track their performance.",
        //         href: "/features/link-shortening",
        //         icon: Link2Icon,
        //     },
        //     {
        //         title: "Password Protection",
        //         tagline: "Secure your links with a password.",
        //         href: "/features/password-protection",
        //         icon: LockIcon,
        //     },
        //     {
        //         title: "Advanced Analytics",
        //         tagline: "Gain insights into who is clicking your links.",
        //         href: "/features/analytics",
        //         icon: LineChartIcon,
        //     },
        //     {
        //         title: "Custom QR Codes",
        //         tagline: "Use QR codes to reach your audience.",
        //         href: "/features/qr-codes",
        //         icon: QrCodeIcon,
        //     },
        // ],
    },
    {
        title: "Tarifs",
        href: "#tarifs",
    },
    {
        title: "Ressources",
        href: "/ressources",
        menu: [
            {
                title: "Blog",
                tagline: "Lisez des articles sur les dernières tendances tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "FAQ",
                tagline: "Trouvez des réponses à vos questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
            {
                title: "Tuto",
                tagline: "Trouvez des réponses à vos questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]

    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
export enum PopularPlanType {
    NO = 0,
    YES = 1,
}

export interface PricingProps {
    id: number;
    title: string;
    popular: PopularPlanType;
    price: number;
    setupprice: number;

    description: string;
    buttonText: string;
    benefitList: string[];
    href: string;
    billing: string;
    paymentLink?: string;

}

export const pricingList: PricingProps[] = [

    {
        id: 1,
        title: "Starter Pack",
        popular: 0,
        price: 9,
        setupprice: 79,
        description: "Lancez votre présence en ligne en seulement 3 jours ! Nos templates simples (galerie, landing page, présentation) offrent un site professionnel avec un CMS intuitif, pour un setup abordable de 79 €. Hébergement et nom de domaine inclus.",
        buttonText: "Choisir une template",
        benefitList: [
            "Setup en 3 jours ouvrables",
            "1 template",
            "CMS pour gérer votre contenu",
            "Hébergement inclus",
            "Nom de domaine"
        ],
        href: "/api/auth/login",
        paymentLink: process.env.STRIPE_STARTER_PLAN_LINK,
        billing: "/month",
    },
    {
        id: 2,

        title: "E-Commerce",
        popular: 1,
        price: 19,
        setupprice: 249,
        description: "Boostez vos ventes avec une boutique en ligne prête en 5 jours ! Pour seulement 249 € de setup, obtenez un site e-commerce performant pour gérer produits, paiements et stocks. Hébergement et domaine inclus.",
        buttonText: "Choisir une template",

        benefitList: [
            "Setup en 5 jours ouvrables",
            "Template e-commerce optimisé",
            "Gestion de produits et paiements",
            "Hébergement performant",
            "Nom de domaine inclus"
        ],
        href: "/api/auth/login",
        paymentLink: process.env.STRIPE_ECOMMERCE_PLAN_LINK,
        billing: "/month",
    },
    {
        id: 3,

        title: "Premium",
        popular: 0,
        price: 29,
        setupprice: 599,
        description: "Repoussez les limites avec un site complexe livré en 7 jours ! Pour 599 € de setup, créez un réseau social payant, une plateforme immobilière ou un admin panel sur mesure. Hébergement premium et domaine inclus.",
        buttonText: "Choisir une template",

        benefitList: [
            "Setup en 7 jours ouvrables",
            "Templates avancés (réseau social, real estate, admin panel)",
            "Fonctionnalités sur mesure",
            "Hébergement premium",
            "Nom de domaine inclus"
        ],
        href: "/api/auth/login",
        paymentLink: process.env.STRIPE_PREMIUM_PLAN_LINK,
        billing: "/month",
    },

];
