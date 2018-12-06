import React, { Component } from 'react'
import Particles from 'react-particles-js'
import AboutBanner from './AboutBanner'
import './about.css'

class About extends Component {
    render() {
        return (
            <div id="about">
                <AboutBanner />
                <div id="about-info">
                    <div id="info1"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>A well-accepted theory of psychology</span>, marketing, and other fields is that human language reflects personality, thinking style, social connections, and emotional states. The frequency with which people use certain categories of words can provide clues to these characteristics. Several researchers found that variations in word usage in writings such as blogs, essays, and tweets can predict aspects of personality (Fast and Funder, 2008; Gill and others, 2009; Golbeck and others, 2011; Hirsh and Peterson, 2009; and Yarkoni, 2010).<br></br><br></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBM conducted a set of studies to understand whether personality characteristics that are inferred from social media data can predict people's behavior and preferences. IBM found that people with specific personality characteristics responded and retweeted in higher numbers in information-collection and -spreading tasks. For example, people who score high on excitement-seeking are more likely to respond, while people who score high on cautiousness are less likely to do so (Mahmud and others, 2013). Similarly, people who score high on modesty, openness, and friendliness are more likely to spread information (Lee and others, 2014).<br></br><br></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBM also found that people with high openness and low emotional range (neuroticism) as inferred from social media language responded more favorably (for example, by clicking an advertisement link or following an account). These results are corroborated by survey-based, ground-truth checking. For example, targeting the 10 percent of users in terms of highest openness and lowest emotional range resulted in increases in click rate from 6.8 percent to 11.3 percent and in follow rate from 4.7 percent to 8.8 percent.<br></br><br></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiple recent studies disclosed similar results for characteristics that were computed from social media data. One recent study with retail store data found that people who score high in orderliness, self-discipline, and cautiousness and low in immoderation are 40 percent more likely than the random population to respond to coupons. A second study found that people with specific values showed specific reading interests (Hsieh and others 2014). For example, people with a higher self-transcendence value demonstrated an interest in reading articles about the environment, and people with a higher self-enhancement value showed an interest in reading articles about work. A third study of more than 600 Twitter users found that a person's personality characteristics can predict their brand preference with 65 percent accuracy.<br></br><br></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The following sections expand upon these high-level findings to describe the research and development behind the Personality Insights service. For more information about studies that apply the service to tangible scenarios, see The service in action.</p></div><br></br>
                    <div id="info2">
                        <h3>Understanding the personality models</h3>
                        <p>For the Personality Insights service, IBM developed models to infer scores for Big Five dimensions and facets, Needs, and Values from textual information. The models reported by the service are based on research in the fields of psychology, psycholinguistics, and marketing:</p>
                        <ul>
                            <li><span className="text-bold">Big Five</span> is one of the most studied of the personality models that were developed by psychologists (Costa and McCrae, 1992, and Norman, 1963). It is the most widely used personality model to describe how a person generally engages with the world. The service computes the five dimensions and thirty facets of the model. The dimensions are often referred to by the mnemonic OCEAN, where O stands for Openness, C for Conscientiousness, E for Extraversion, A for Agreeableness, and N for Neuroticism. (Because the term Neuroticism can have a specific clinical meaning, the service presents such insights under the more generally applicable heading Emotional range.)</li>
                            <li>
                            <span>Needs</span> are an important aspect of human behavior. Research literature suggests that several types of human needs are universal and directly influence consumer behavior (Kotler and Armstrong, 2013, and Ford, 2005). The twelve categories of needs that are reported by the service are described in marketing literature as desires that people hope to fulfill when they consider a product or service.
                            </li>
                            <li>
                            <span>Values</span> convey what is most important to an individual. They are "desirable, trans-situational goals, varying in importance, that serve as guiding principles in people's lives" (Schwartz, 2006). Schwartz summarizes five features that are common to all values:
                                <ul>
                                    <li>Values are beliefs.</li>
                                    <li>Values are a motivational construct.</li>
                                    <li>Values transcend specific actions and situations.</li>
                                    <li>Values guide the selection or evaluation of actions, policies, people, and events.</li>
                                    <li>Values vary by relative importance and can be ranked by importance.</li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                    <div id="info3"></div>
                </div>
                <Particles params={{
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 600
                            }
                        },
                        "color": {
                            "value": ["#fff", "#3498db", "#e74c3c"]
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#fff"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 0.2,
                                "opacity_min": 0,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 50,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "size_min": 5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "top",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble",
                                "duration": 5,
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 250,
                                "size": 0,
                                "duration": 2,
                                "opacity": 0,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true

                }}
                />
            </div>
        )
    }
}

export default About