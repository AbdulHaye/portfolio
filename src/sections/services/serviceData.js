import { SiAntdesign } from "react-icons/si"
import { SiAltiumdesigner } from "react-icons/si"
import { AiOutlineCloudServer } from "react-icons/ai"
import { MdOutlineDisplaySettings } from "react-icons/md"
import { BsDatabaseCheck } from "react-icons/bs"
import { GiWorld } from "react-icons/gi";

const serviceData = [
    {
        id: 1,
        icon: <SiAntdesign />,
        title: 'UI/UX Design',
        desc: "I'am a UI/UX designer who specializes in designing user interfaces (UI) and user experiences (UX) for digital products, such as websites and mobile applications. So, i use Figma, AdobeXD etc",
    },
    {
        id: 2,
        icon: <SiAltiumdesigner />,
        title: 'Frontend Development',
        desc: 'Am also a frontend developer who involves structure and behaviour of web pages. So, i use Reactjs, Angularjs,  Nextjs, Redux, Redux-Toolkit, Bootstrap, Material-UI, Tailwind CSS, Chakra UI, Javascript HTML5, CSS3,',
    },
    {
        id: 3,
        icon: <AiOutlineCloudServer />,
        title: 'Backend Development',
        desc: 'Am also a backend developer who involves server-side programming, APIs integrating and database configuration. So, i use nodejs, expressjs, mongodb, laravel, mysql, dynamodb cloud-firestore, AWS, S3 Bucket, SQS, RabbiqMq, Kafka, Aws lamda, CRM template-engine(ejs, hbs, blade), REST APIs, Javascript, Php, python',
    },

    {
        id: 4,
        icon: <MdOutlineDisplaySettings />,
        title: 'Development And Maintenance',
        desc: 'Am also doing development and maintenance of websites in which involves regular updates to the content and design, as well as ensuring that the API and database are functioning properly. Regular testing and debugging to ensure a smooth user experience',
    },
    {
        id: 5,
        icon: <BsDatabaseCheck />,
        title: 'APIs Integrations',
        desc: 'Am also integrates third-party APIs to connect different software systems or applications, enabling them to exchange data and communicate with each other, such as social media platforms cloud services, such as designing API endpoints, handling authentication and authorization, parsing and formatting data, and testing and debugging API integrations',
    },
    {
        id: 6,
        icon: <GiWorld />,
        title: 'VPS and Shared Deployment',
        desc: 'In my DevOps role, I excel in VPS and shared server deployments. I expertly provision and configure VPS instances, optimizing them with essential software and robust security measures. Similarly, I adeptly manage shared server deployments, efficiently uploading application files and fine-tuning configurations through hosting control panels for seamless application hosting',
    },
]
export default serviceData