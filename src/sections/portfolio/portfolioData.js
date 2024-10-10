import chatApplication from '../../assets/chat-application.png'
import taskManagement from '../../assets/task-management.png'
import skipTrace from '../../assets/skip-trace.png'
import podioCrm from '../../assets/podio_crm.png'
import patient from '../../assets/dashboard.png'
import ppcLeads from '../../assets/ppc_leads_to_deals.png'
import salesForceCrm from '../../assets/saleForcecrm.png'
import autoRei from '../../assets/auto-rei.png'
import adminPanel from '../../assets/admin-panel.jpg'
import ecommerce from '../../assets/ecommerce-shopping-cart.png'
import weather from '../../assets/weather.jpg'
import notes from '../../assets/notes.png'
import login from '../../assets/login.png'
import friendlistt from '../../assets/friendlist.png'
import crud from '../../assets/crud.jpg'

const portfolioData = [
    {
        id: 1,
        img: crud,
        title: "CRUD-App",
        desc: "Complete CRUD application using redux-toolkit (RTK) Query in which add, del, update, get request hit on server using json-server for get fake REST API to operate crud",
        githubLink: "https://github.com/goshurarah/crud-using-redux-toolkit-queries",
        demoLink: ""
    },
    {
        id: 2,
        img: friendlistt,
        title: "FriendList-Page",
        desc: "Friend request list web in which when friends accepted it goes to accept list, blocked it goes to block list and reject it goes to reject list, using reactjs, redux, material-UI",
        githubLink: "https://github.com/goshurarah/friendlist-app-using-react-redux",
        demoLink: ""
    },
    {
        id: 3,
        img: login,
        title: "Login-Signup-Form",
        desc: "This is employ login-signup form/registeration form using nodejs, expressjs, mongodb with complete validation, authentication, cookies, jwt created and deleted",
        githubLink: "https://github.com/goshurarah/best-login-signup-form-using-nodejs",
        demoLink: ""
    },
    {
        id: 4,
        img: notes,
        title: "Notes-Web-App",
        desc: "Complete notes web app using reactjs, conditional rendering, react-redux-toolkit, full responsive, material-UI, in which notes is added, deleted, updated and readed",
        githubLink: "https://github.com/goshurarah/todo-app-using-redux-toolkit",
        demoLink: ""
    },
    {
        id: 5,
        img: weather,
        title: "Live Weather Web App",
        desc: "Full responsive weather web app using nodejs, expressjs. weatherAPi, template engine ejs, javascript and REST API that tells the weather of any city",
        githubLink: "https://github.com/goshurarah/full-responsive-weatherapp-using-nodejs",
        demoLink: ""
    },
    {
        id: 6,
        img: ecommerce,
        title: "Ecommerce-Shopping-Cart",
        desc: "Full responsive ecommerce shopping cart using react-redux in which a product page, cart page and summary modal included that tells all detail related to products",
        githubLink: "https://github.com/goshurarah/ecommerce-shopping-cart-using-react-redux",
        demoLink: ""
    },
    {
        id: 7,
        img: chatApplication,
        title: "Chat Web App",
        desc: "Complete chat web app UI using nextjs with typescript, custom css, expressjs, mongodb, nodejs using for complete authorization and authentictaion and login, signup page UI",
        githubLink: "https://github.com/goshurarah/chat-application-using-mern-nextjs-typescript",
        demoLink: ""
    },
    {
        id: 8,
        img: adminPanel,
        title: "Admin-Panel Web",
        desc: "Complete admin panel, brand panel, bank panel of ecommerce using reactjs, material-ui, bootstrap, firestore database with complete role base authentiction, authorization and protected react routes in which products module, brands module, banks module, carousels module, categories module, discounts module, sales module, users module integrated",
        githubLink: "https://github.com/goshurarah/admin-panel-react-firebase",
        demoLink: ""
    },
    {
        id: 9,
        img: patient,
        title: "Patients Management Web",
        desc: "I developed the complete frontend and backend for the Patients Management Web, a healthcare platform built with React, Material-UI, Bootstrap, and CSS. Following Adobe XD designs, I integrated APIs to display patient lists, detailed patient profiles, and health data visualizations such as systolic and diastolic graphs, heart rate, blood pressure, diagnosis history, and lab results. My work ensures seamless API integration, providing an intuitive and data-rich experience for healthcare providers.",
        githubLink: "https://github.com/goshurarah/patients-management-dashboard-reactjs",
        demoLink: ""
    },
    {
        id: 10,
        img: taskManagement,
        title: "Task Management Web",
        desc: "I developed a complete task management system, handling both the frontend and backend. Using ReactJS, Material-UI, Bootstrap 5, and CSS, I crafted a responsive and intuitive interface. For the backend, I implemented Node.js with Express.js and integrated MongoDB as the database. I also developed JWT-based authentication for secure access. This system includes modules for project tracking, task assignment, employee attendance, and timesheet management, providing an efficient solution to manage and monitor team performance",
        githubLink: "https://github.com/goshurarah/task-management-using-mern",
        demoLink: ""
    },
    {
        id: 11,
        img: autoRei,
        title: "Auto REI(Real Estate Invester) Web",
        desc: "I developed all backend functionalities for Auto REI, a dynamic real estate investment platform. Utilizing Python Flask, I built APIs to efficiently manage property data from multiple sources like Realtor.com, RealEstateAPI, and RESO Web API/Bridge Web API. The system handles millions of records in DynamoDB, with AWS S3 for image and file storage and AWS SQS for queue management. My backend work streamlines the property acquisition process by allowing users to seamlessly identify and engage property agents for potential investments",
        githubLink: "https://github.com/goshurarah/auto-rei-python-flask-aws-reactjs",
        demoLink: ""
    },
    {
        id: 12,
        img: salesForceCrm,
        title: "Sales Force CRM System Web",
        desc: "I developed the complete backend for the Sales Force CRM System, a powerful lead management and real estate CRM platform. Using nodejs, express and mongodb, I created APIs to handle features like customizable workflows, pipeline management, task and activity tracking, email/SMS communication, and payment integration with Stripe. I also implemented calendar integration, analytics and reporting, and user role-based permissions. My backend work ensures seamless integration with third-party tools and enables efficient data management to support the React-based frontend.",
        githubLink: "https://github.com/goshurarah/sales-force-crm-systems-mern",
        demoLink: "https://salesforcecrmsytems.com/"
    },
    {
        id: 13,
        img: podioCrm,
        title: "Podio CRM System Web",
        desc: "I handled the entire backend development for the Podio CRM System, a comprehensive real estate CRM platform. Built with Laravel and MySQL, I implemented robust backend functionalities to manage lead tracking, customizable workflows, pipeline management, task automation, and payment integration with Stripe. I integrated features like email/SMS communication, calendar sync, analytics, and role-based permissions. Additionally, I developed an affiliate program module and ensured seamless integration with third-party real estate tools. My backend work supports a scalable and efficient system, powering the React-based frontend.",
        githubLink: "https://github.com/goshurarah/podio-crm-systems-laravel-mysql-reactjs",
        demoLink: "https://podiocrmsystems.com/"
    },
    {
        id: 14,
        img: ppcLeads,
        title: "PPC Leads To Deals Web",
        desc: "For the PPC Leads to Deals web platform, I was responsible for building the entire backend architecture using Laravel and MySQL. I developed robust API endpoints to manage property listings, user profiles, and premium subscription features. I also integrated a support ticket system, CRM functionality, and handled complex data such as property details, mortgage rates, and other real estate-specific attributes. My backend work ensured secure and efficient data management, allowing the React-based frontend to deliver a seamless user experience.",
        githubLink: "https://github.com/goshurarah/ppc-lead-to-deals-using-laravel-mysql-reactjs",
        demoLink: "https://ppcleadstodeal.com/"
    },
    {
        id: 15,
        img: skipTrace,
        title: "Skip Trace Web",
        desc: "I developed the entire Skip Trace Web platform, handling both frontend and backend using Laravel and Blade templates. This web application provides highly accurate skip tracing services tailored to the real estate industry. Key features include a complete admin and user dashboard, payment integration with Stripe and PayPal, a Laravel queue service for background processing, a support ticket module, an affiliate program, and referrals. I implemented CSV/Excel file handling where users upload their files, which are processed and skip-traced using a large database. The system then generates and delivers results after payment. The support ticket system allows users to address file issues with admin assistance, while the affiliate program rewards customers for successful referrals. This platform is designed to meet the demands of real estate investors, delivering up to 10 contact records per successful skip trace with 95%+ accuracy",
        githubLink: "https://github.com/goshurarah/skip-trace-using-laravel-mysql",
        demoLink: "https://rapidskip.us/"
    },

];

export default portfolioData