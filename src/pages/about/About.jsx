import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.png'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const about = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        AutoDoc team has developed a new technology that allows comprehensive
        AI-learning of automobile sounds, enabling the AI to identify faulty
        components!!!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>HOW AUTODOC WORKS? </h1>
            <p>
              Autodoc is an advanced fault diagnostics system that uses AI to
              accurately detect and diagnose issues with car engines. Our system
              works by gathering data from your car's sensors and other sources
              in real-time, and then using advanced machine learning algorithms
              to analyze that data and detect any potential issues. To use
              Autodoc, simply plug our device into your car's OBD-II port (which
              is usually located underneath the dashboard) and connect to our
              mobile app. Our app will guide you through the diagnostic process
              step by step, providing real-time feedback on your engine's
              performance and identifying any issues that need to be addressed.
            </p>

            <p>
              Overall, Autodoc is the ultimate tool for car owners who want to
              stay on top of their engine's performance and keep their vehicle
              running smoothly. With Autodoc, you can diagnose issues quickly,
              prevent costly repairs, and stay safe on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              At Autodoc, our vision is to empower car owners with the latest
              advancements in AI-driven diagnostics technology. We believe that
              by providing car owners with accurate, reliable, and easy-to-use
              diagnostics tools, we can help prevent costly repairs, improve
              road safety, and make car ownership a more seamless and enjoyable
              experience. Our goal is to revolutionize the way car owners
              diagnose and maintain their vehicles, and to become the leading
              provider of AI-driven diagnostics solutions in the automotive
              industry.
            </p>
            <p>
              Automobile sound scope is a staple in the auto-mechanic’s toolbox,
              and when one is not available, long flat screwdrivers are used to
              similar effect.Based on that principle of identifying specific
              sounds, AutoDoc Team has nearly perfected an AI-powered fault
              detection and diagnosis system.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              The human brain can easily distinguish between cats and dogs,
              apples and oranges, but an AI must be taught by countless images
              as examples. This is a grossly simplified but generally
              descriptive of machine learning.
            </p>

            <p>
              "Our mission at Autodoc is to provide car owners with a powerful
              yet easy-to-use tool for diagnosing faults in their vehicle's
              engine. We understand that engine problems can be complex and
              costly, which is why we aim to simplify the diagnosis process and
              help our users save time and money. With our advanced algorithms
              and real-time data analysis, Autodoc empowers car owners to take
              control of their engine's health, make informed decisions, and
              keep their vehicles running smoothly for longer."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
