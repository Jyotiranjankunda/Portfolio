import classes from './aboutme.module.css';
import aboutPhoto from '../../assets/aboutphoto.png';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiNewBorn } from 'react-icons/gi';
import { FaSchool } from 'react-icons/fa6';
import { BiSolidSchool } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';

const Aboutme = () => {
  return (
    <>
      <div className={classes.dummy} id='About'></div>
      <div className={classes.aboutme} id='aboutme'>
        <p className={classes.heading}>About Me</p>
        <div className={classes.sections}>
          <div className={classes.leftSection}>
            <img src={aboutPhoto} alt='' />
            <div className={classes.about}>
              <p>
                I am a B.Tech graduate in Computer Science & Engineering from Veer
                Surendra Sai University of Technology with a CGPA of 9.04. My passion lies
                in problem-solving, logic building, and continuously exploring new
                technologies.
              </p>
              <p>
                I am proficient in a versatile tech stack, including languages like C/C++,
                Java, and JavaScript, and have experience with MERN stack. My current role
                as an Associate Software Engineer Intern at Incture Technologies has
                enhanced my skills in project management, performance optimization, and
                fullstack development.
              </p>
              <p>
                In addition, I am an avid competitive programmer, having solved over 500+
                problems on platforms such as LeetCode, GeeksforGeeks, and CodeChef.
                Looking ahead, my aspirations are to contribute to impactful projects,
                continuously learn and grow, and make a tangible difference in technology.
                ✨
              </p>
            </div>
          </div>
          <div className={classes.rightSection}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                contentStyle={{ background: '#C8FACD', color: '#005249' }}
                iconStyle={{ background: '#C8FACD', color: '#005249' }}
                icon={<GiNewBorn />}>
                <h3 className='vertical-timeline-element-title'>Born On: </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  30<sup>th</sup> October, 2001
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                iconStyle={{ background: '#C8FACD', color: '#005249' }}
                contentStyle={{ background: '#C8FACD', color: '#005249' }}
                icon={<FaSchool />}>
                <h3 className='vertical-timeline-element-title'>Matriculation</h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Angels&apos; Acacdemy Sr. Sec. School (2017)
                </h4>
                <p>CGPA: 10/10</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                iconStyle={{ background: '#C8FACD', color: '#005249' }}
                contentStyle={{ background: '#C8FACD', color: '#005249' }}
                icon={<FaSchool />}>
                <h3 className='vertical-timeline-element-title'>Intermediate</h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Angels&apos; Acacdemy Sr. Sec. School (2019)
                </h4>
                <p>Percentage: 84%</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                iconStyle={{ background: '#C8FACD', color: '#005249' }}
                contentStyle={{ background: '#C8FACD', color: '#005249' }}
                icon={<BiSolidSchool />}>
                <h3 className='vertical-timeline-element-title'>College</h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Veer Surendra Sai University of Technology (2024)
                </h4>
                <p>B.Tech in CSE (CGPA: 9.04)</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                iconStyle={{ background: '#C8FACD', color: '#005249' }}
                contentStyle={{ background: '#C8FACD', color: '#005249' }}
                icon={<MdWork />}>
                <h3 className='vertical-timeline-element-title'>Internship</h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Incture Technologies (Jan 2024 - Present)
                </h4>
                <p>ASE Trainee</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
