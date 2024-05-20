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
      <div className={classes.dummy} id='dummy-about'></div>
      <div className={classes.aboutme} id='aboutme'>
        <p className={classes.heading}>About Me</p>
        <div className={classes.sections}>
          <div className={classes.leftSection}>
            <img src={aboutPhoto} alt='' />
            <div className={classes.about}>
              <p>
                Hello! I&apos;m Jyotiranjan Kunda, a simple yet ambitious soul with a zest
                for life. Born in Odisha and raised in the serene town of Haridwar since my childhood, I&apos;ve grown to appreciate the beauty of nature and the
                value of close-knit communities. Whether it&apos;s cycling through scenic
                routes or indulging in fitness routines, I find joy in staying active and
                embracing the great outdoors. 🌳🚴‍♂️
              </p>
              <p>
                When I&apos;m not immersed in the world of technology, you&apos;ll find me
                enjoying the simpler pleasures of life. I love listening to songs,
                watching movies, and spending quality time with family and friends. My
                interests also extend to playing indoor games like carrom, chess, and
                table tennis, as well as outdoor sports like cricket and badminton. These
                activities keep me balanced and energized. 🏏♟️
              </p>
              <p>
                In my quiet moments, I dive into the world of books, reading novels and
                biographies that inspire and broaden my horizons. With high aspirations
                and a passion for continuous growth, I strive to lead a fulfilling and
                enriching life. Let&apos;s connect and share the wonders of our journeys!
                📚✨
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
                <h3 className='vertical-timeline-element-title'>Company</h3>
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
