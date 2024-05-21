import classes from './experience.module.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiNewBorn } from 'react-icons/gi';
import { FaSchool } from 'react-icons/fa6';
import { BiSolidSchool } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';

const Experience = () => {
  return (
    <>
      <div className={classes.dummy} id='dummy-experience'></div>
      <div className={classes.experience} id='experience'>
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
            <h3 className='vertical-timeline-element-title'>Company</h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Incture Technologies (Jan 2024 - Present)
            </h4>
            <p>ASE Trainee</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
