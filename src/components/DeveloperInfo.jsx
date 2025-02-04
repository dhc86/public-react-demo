import { getImageUrl } from '@/lib/utils/images';

import { Card, CardContent, Separator } from '@/components/ui';
import {
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  NotebookText,
  Phone,
} from 'lucide-react';

const DeveloperInfo = () => {
  return (
    <div className='relative h-screen w-[600px] flex-col items-center overflow-auto bg-card'>
      <div className='flex flex-row items-center justify-between gap-4 p-4'>
        <div className='flex flex-row items-center gap-3'>
          <img
            src={getImageUrl('ChainSHIB_1.png')}
            alt='logo'
            className='h-[36px]'
          />
          <a
            className='text-lg leading-5'
            href='https://www.linkedin.com/in/diegoherrerac/'
            target='_blank'
            rel='noreferrer'
          >
            <b>Senior Frontend Developer</b>
            <br />
            <span className='text-sm text-muted-foreground'>
              Made by <b>Diego Herrera</b>
            </span>
          </a>
        </div>
      </div>
      <Separator />
      <div className='p-4 pb-0'>
        {/* <div class='container'> */}
        <h1 className='mb-2 text-center text-2xl font-bold'>
          Welcome to My React Demo!
        </h1>
        <p>
          Thank you for checking out my demo application! This project showcases
          various React features and best practices, including:
        </p>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            State Management: Powered by Redux and Context API for seamless
            global state handling.
          </span>
        </div>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            Hooks: Leveraging React hooks to enhance functionality and optimize
            performance.
          </span>
        </div>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            Authentication: Secure login with access and refresh tokens.
          </span>{' '}
        </div>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            Dynamic Theming: Users can switch themes for a personalized
            experience.
          </span>
        </div>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            Data Fetching & Filtering: Efficiently retrieves and processes data
            with filters.
          </span>{' '}
        </div>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            Forms & Validation: Utilizes React Hook Form for streamlined form
            handling.
          </span>
        </div>
        <div className='flex p-3 text-muted-foreground'>
          <Check />
          <span className='pl-3'>
            Routing: Implements React Router for smooth navigation across the
            application.
          </span>
        </div>
        <p className='py-3'>
          Explore the demo to see these features in action!
        </p>
      </div>
      <Separator />
      <Card className='w-[600px]'>
        <CardContent className='flex flex-row gap-2 p-4'>
          <div className='relative'>
            <img
              className='mb-4 h-[200px] object-scale-down pr-2'
              src={getImageUrl('dhc.png')}
              alt='dhc-developer'
            />
          </div>
          <div className='relative'>
            <h2 className='mb-2 text-xl font-semibold'>Diego Herrera</h2>
            <div className='flex p-3 text-muted-foreground'>
              <Phone /> <span className='pl-3'>(+1) 604-716 9943</span>
            </div>
            <div className='flex p-3 text-muted-foreground'>
              <Mail />{' '}
              <span className='pl-3'>diego.herrera.ceron@gmail.com</span>
            </div>
            <div className='flex p-3 text-muted-foreground'>
              <MapPin />
              <span className='pl-3'>Vancouver, Canada</span>
            </div>

            <div className='my-4 flex justify-between'>
              <a
                href='https://www.linkedin.com/in/diegoherrerac/'
                target='_blank'
                rel='noreferrer'
              >
                <Linkedin className='ml-5 h-7 w-7' />
              </a>

              <a
                href='https://github.com/dhc86'
                target='_blank'
                rel='noreferrer'
              >
                <Github className='h-7 w-7' />
              </a>

              <a
                href='https://app.enhancv.com/share/6d906802'
                target='_blank'
                rel='noreferrer'
              >
                <NotebookText className='h-7 w-7' />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className='p-4 pb-0 text-muted-foreground'>
        Senior Frontend Developer with over 8 years of experience in frontend
        development and team leadership. Expert in ReactJS and Angular. Key
        achievements include leading frontend initiatives for the ReactJS
        application at WineDirect and developing the Angular WineDirect OneUI
        project. Currently seeking the next step in my career as a Senior
        Frontend Developer, where I can leverage my software development
        expertise and leadership skills to drive innovation, enhance user
        experiences, and contribute to a dynamic team’s success.
      </div>
      <div className='p-4'></div>
    </div>
  );
};

export default DeveloperInfo;
