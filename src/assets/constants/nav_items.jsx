import {
    HomeIcon,
    UserIcon,
    CodeBracketIcon,
    AcademicCapIcon,
    ChatBubbleLeftRightIcon
  } from "@heroicons/react/24/outline";
  
import Hero from '../sections/hero';
import About from '../sections/about';
import Tech from '../sections/technologies';
import Timeline from '../sections/timeline';
import Contact from '../sections/contactnew';

  const nav_items = [
    {
      id: 'home',
      alt: 'Home',
      name: 'WHOAMI',
      href: '/',
      icon: <HomeIcon width={30}/>,
      section: <Hero />
    },
    {
      id: 'about',
      alt: 'About me',
      name: 'About me',
      href: '/#about',
      icon: <UserIcon width={30}/>,
      section: <About />
    },
    {
      id: 'skills',
      alt: 'My skills',
      name: 'Skills',
      href: '/#skills',
      icon: <CodeBracketIcon width={30}/>,
      section: <Tech />
    },
    {
      id: 'timeline',
      alt: 'My career path',
      name: 'Work XP',
      href: '/#timeline',
      icon: <AcademicCapIcon width={30}/>,
      section: <Timeline />
    },
    {
      id: 'contact',
      alt: 'How to get in contact',
      name: 'Contact',
      href: '/#contact',
      icon: <ChatBubbleLeftRightIcon width={30}/>,
      section: <Contact />
    }
  ];
  
  export default nav_items;
  