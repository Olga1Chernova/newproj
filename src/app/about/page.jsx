import Image from 'next/image';

import css from './page.module.css'
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.ImgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="about"
          className={css.img}
        />
        <div className={css.ImgText}>
          <h1 className={css.imgTitle}>Digital Storytellers</h1>
          <h2 className={css.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={css.textContainer}>
        <div className={css.item}>
          <h2 className={css.title}>Who are we?</h2>
          <p className={css.desc}>
            At our company, we specialize in creating a diverse range of
            innovative and cutting-edge apps. With a passion for technology and
            a team of skilled developers, we are dedicated to delivering
            exceptional digital experiences to our users.
            <br />
            <br />
            We take pride in our ability to cater to various needs and
            preferences, ensuring that each app we develop is tailored to meet
            the unique requirements of our clients. Our goal is to create apps
            that seamlessly blend functionality, user-friendliness, and
            captivating design.
          </p>
        </div>
        <div className={css.item}>
          <h2>What we do?</h2>
          <p>
            Our team of talented developers, designers, and engineers work
            collaboratively to bring ideas to life. We collaborate closely with
            our clients to understand their vision and create custom solutions
            that align with their goals and objectives.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;