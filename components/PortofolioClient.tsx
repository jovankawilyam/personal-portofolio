'use client';

import { useNeuralBackground } from "./hooks/useNeuralBackground";
import { useNavbar } from "./hooks/useNavbar";
import { useFadeIn } from "./hooks/useFadeIn";
import { useContactForm } from "./hooks/useContactForm";
import Image from "next/image";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Script from "next/script";


gsap.registerPlugin(ScrollTrigger);



export default function PortfolioClient() {
  const container = useRef<HTMLDivElement | null>(null);

  useNeuralBackground();
  useNavbar();
  useFadeIn();
  useContactForm();

  return (
    
    
    <>
      <canvas id="neural-bg"></canvas>

      <nav id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo-container"></a>

          <div className="mobile-menu-toggle" id="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="nav-menu" id="nav-menu">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#achievements">ACHIEVEMENTS</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>   



      <section id="home" className="hero">
          <div className="hero-content">
              <h1 className="glitch" data-text="JOVANKA WILYAM">JOVANKA WILYAM</h1>
              <p className="subtitle">Frontend developer & Data Analytics</p>
          </div>
          <a href="#about" className="scroll-btn">
              <div className="scroll-btn-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                  </svg>
              </div>
          </a>
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="fade-in">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-container">
              <div className="about-image">
                  <div className="profile-img-wrapper">
                      <div className="profile-img">
          <span>
            <Image src="/image/profile.png" alt="Profile Jovanka" width={300} height={500} className="rounded-xl"/>
            {/* <video className="image" autoPlay loop playsInline controls ><source src="profile-video.mp4" type="video/mp4" /></video> */}
            </span>
                      </div>
                  </div>
              </div>
              <div className="about-content">
                  <h3>Hello Im Jovanka Wilyam</h3>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px'}}>
                      Hi! I&apos;m Jovanka Wilyam Muzaki, an active Information Systems student at Institut Bisnis dan Informatika Kesatuan (IBIK) Bogor.
                      I&apos;m passionate about exploring the world of Web Development and Data Science, 
                      combining analytical thinking with creativity to build meaningful digital solutions.
                  </p>
                  <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)'}}>
                     I have hands-on experience as a Front-End Developer in a website project and as a Data Analyst during a Data Science Bootcamp. 
                     Beyond technical skills, I&apos;m known for my strong adaptability, leadership, and team collaboration, proven through my active roles in the 
                     Himpunan Mahasiswa Sistem Informasi as Head of the Human Resource Development Bureau.
                  </p>
                  <br />
                  <p>
                      I love taking on challenges that help me grow — whether it&apos;s solving data-driven problems, creating user-friendly interfaces, or developing community projects that make an impact.
                  </p>
                  <a href="/CV_Jovanka Wilyam_IBI Kesatuan.pdf" download="CV (Curriculum Vitae)_Jovanka Wilyam_Kab.Bogor.pdf" className="neural-btn" >Download CV </a>

                  <div className="about-stats">
                      <div className="stat-card">
                          <div className="stat-number">8+</div>
                          <div className="stat-label">Projects</div>
                      </div>
                      <div className="stat-card">
                          <div className="stat-number">1+</div>
                          <div className="stat-label">Years Exp</div>
                      </div>
                      <div className="stat-card">
                          <div className="stat-number">2+</div>
                          <div className="stat-label">Clients</div>
                      </div>
                  </div>
              </div>
          </div> 
      </section>

          {/* EXPERIENCE SECTION */}

      <section id="experience" className="fade-in">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="glass-card">
          <a href="https://www.instagram.com/p/DHYEELXx9pc/?igsh=emt5Z2kzdDI4bTV2">
          <h3 style={{color: 'var(--primary)'}}>Head of Human Resource Development</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            <strong>Himpunan Mahasiswa Sistem Informasi (2025 - 2026)</strong><br/>
            Pemberdayaan Sumber Daya Manusia (PSDM) is the driving force in empowering student and community resources, 
            which includes the student affairs division and the community division, so that skilled students and communities are created.
          </p></a>
        </div>

        <div className="glass-card">
          <h3 style={{color: 'var(--secondary)'}}>Data Science Bootcamp – Data Analyst</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            Analyzed datasets using Python to identify transaction patterns and present data-driven insights.
          </p>
        </div>

        <div className="glass-card">
          <h3 style={{color: 'var(--accent)'}}>Website Jual Beli Akun PUBG – Front-End</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            Built a responsive website for an online marketplace using HTML, CSS, JavaScript, Laravel.
          </p>
        </div>
      </section>

        {/* PROJECT SECTION */}
      <section id="projects" className="fade-in">
          <h2 className="section-title">PROJECTS</h2>

      <a href="https://www.instagram.com/litbangku_id?igsh=ZXI1ejI1Mmo3dXp1" target="_blank" className="project-link">
        <div className="glass-card project-card">
          <h3 style={{color: 'var(--secondary)'}}>Litbangku</h3>
          <p style={{color: 'var(--text-secondary)'}}>
      Litbangku ( Literasi Bangun Keuangan ) is a literacy research and development program initiated to improve reading culture and educational impact in the community. 
      The program focuses on research-based strategies, literacy mapping, and community empowerment through innovative and measurable approaches.</p>
        </div>
      </a>


                {/* <a href="blank" target="_blank" className="project-link"> */}
        <div className="glass-card project-card">
          <h3 style={{color: 'var(--accent)'}}>Jual Beli Akun PUBGM</h3>
          <p style={{color: 'var(--text-secondary)'}}>
          Developed a full-stack web-based marketplace platform using Laravel, implementing complete CRUD functionality,
           user authentication, dynamic search & filtering system, and responsive UI design.</p>
        </div>
      {/* </a> */}


        <a href="https://hand-tracking-beige.vercel.app" target="_blank" className="project-link">
        <div className="glass-card project-card">
          <h3 style={{color: 'var(--primary)'}}>Hand Tracking</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            Hand tracking is a technology that allows a computer or AI system to detect and track the position and movements of a human hand in real-time — usually through a camera.
          </p>
        </div>
      </a>


                  <a href="https://sleep-detect.vercel.app" target="_blank" className="project-link">
        <div className="glass-card project-card">
          <h3 style={{color: 'var(--secondary)'}}>Sleep Detect</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            Sleep detection is a system used to determine whether someone is asleep, drowsy, or awake using sensors or cameras.
          </p>
        </div>
      </a>
                  <a href="https://photobooth-bounty.vercel.app/" target="_blank" className="project-link">
                  <div className="glass-card project-card">
                      <h3 style={{color: 'var(--accent)'}}>Photoboth Bounty</h3>
                      <p style={{color: 'var(--text-secondary)'}}>A photobooth is a system that allows people to take photos automatically — usually via a built-in camera, without the need for a photographer.</p>
                  </div>
                    </a>



                  <a href="https://pendaftaransysfornation.vercel.app/" target="_blank" className="project-link">       
        <div className="glass-card project-card">
          <h3 style={{color: 'var(--primary)'}}>pendaftaran</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            Seminar registration is the process by which participants register and register their identity in order to participate in the seminar.
            This is typically done before the event, either online (via the website/form) or offline (on-site).
          </p>
        </div>
      </a>



      <a href="https://photobooth-vintage.vercel.app/" target="_blank" className="project-link">
      <div className="glass-card project-card">
          <h3 style={{color: 'var(--secondary)'}}>Photoboth Vintage</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            Vintage Photobooth offers a classic photo experience inspired by retro aesthetics and old newspaper styles.
            Capture timeless moments with elegant frames that bring nostalgic charm to every shot.
          </p>
        </div>
      </a>

      <a href="https://voting-pemira2025.vercel.app/" target="_blank" className="project-link">
        <div className="glass-card project-card">
          <h3 style={{color: 'var(--accent)'}}>Voting Pemira 2025</h3>
          <p style={{color: 'var(--text-secondary)'}}>
            PEMIRA 2025 Voting is a digital platform for transparent, fair, and secure student elections.
            Empowering every vote to shape the future of student leadership.
          </p>
        </div>
      </a>
      </section>

      {/* ACHIEVEMENTS SECTION */}

      <section
        ref={container}
        id="achievements"
        className="fade-in">
        <h2 className="section-title">ACHIEVEMENTS</h2>

        <div className="glass-card">
          <ul
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              listStyle: 'none',
              paddingLeft: '0',
            }}
          >
            <li className="achievement-item">🥉 Juara 3 Bandung Taekwondo International – 2017</li>
            <li className="achievement-item">🥈 Juara 2 Liga Pelajar Taekwondo – 2017</li>
            <li className="achievement-item">🥈 Juara 2 Palagan Open Taekwondo – 2018</li>
            <li className="achievement-item">🥇 Juara 1 Al Irsyad Al Syamsiyyah Taekwondo – 2018</li>
            <li className="achievement-item">🥈 Juara 2 Liga Pelajar Taekwondo – 2018</li>
            <li className="achievement-item">🥇 Juara 1 Liga Pelajar Taekwondo – 2018</li>
            <li className="achievement-item">🥉 Juara 3 Menpora Cup Taekwondo – 2019</li>
            <li className="achievement-item">🥉 Juara 3 Sportopia Cup II Taekwondo – 2019</li>
            <li className="achievement-item">🥈 Juara 2 Pugnator Badung Sport Tourism Taekwondo International – 2019</li>
            <li className="achievement-item">🥉 Juara 3 The Kick Indonesia Taekwondo – 2019</li>
            <li className="achievement-item">🥈 Juara 2 Student Open – 2019</li>
            <li className="achievement-item">🥇 Juara 1 Koni Cup – 2019</li>
            <li className="achievement-item">🥈 Juara 2 Palagan Open II Taekwondo – 2020</li>
            <li className="achievement-item">🥉 Juara 3 Online Indonesia International Biho Championship – 2021</li>
            <li className="achievement-item">🥇 Juara 1 Speed Kicking – 2021</li>
            <li className="achievement-item">🥈 Juara  Bahurupi Cup 3 – 2022</li>
          </ul>
        </div>
      </section>

      {/* SKILLS SECTION */}

      <section id="skills"><h2 
      className="section-title">SKILLS</h2>
      <div className="skills-list"><div className="skill-bar"><span className="skill-name">HTML</span>
        </div><div className="skill-bar"><span className="skill-name">CSS</span>
          </div><div className="skill-bar"><span className="skill-name">JavaScript</span>
            </div><div className="skill-bar"><span className="skill-name">TypeScript</span>
              </div><div className="skill-bar"><span className="skill-name">React</span>
                </div><div className="skill-bar"><span className="skill-name">Laravel</span>
                  </div><div className="skill-bar"><span className="skill-name">Power BI</span>
                    </div><div className="skill-bar"><span className="skill-name">Tableau</span>
                    </div><div className="skill-bar"><span className="skill-name">Rest API</span>
                      </div><div className="skill-bar"><span className="skill-name">HTML</span>
                        </div><div className="skill-bar"><span className="skill-name">CSS</span>
                          </div><div className="skill-bar"><span className="skill-name">JavaScript</span>
                            </div><div className="skill-bar"><span className="skill-name">TypeScript</span>
                              </div><div className="skill-bar"><span className="skill-name">React</span>
                                </div><div className="skill-bar"><span className="skill-name">Laravel</span>
                                  </div><div className="skill-bar"><span className="skill-name">Power BI</span>
                                    </div><div className="skill-bar"><span className="skill-name">Tableau</span>
                                      </div><div className="skill-bar"><span className="skill-name">RestAPI</span>
                                    </div></div></section>

      {/* CONTACT SECTION */}

      <section id="contact" className="fade-in">
          <h2 className="section-title">CONTACT</h2>
          <form className="contact-form glass-card">
              <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                  <textarea rows={5} name="message" placeholder="Your Message" required></textarea>
              </div>
              <div className="status-message"></div>
              <button type="submit" className="neural-btn">SEND MESSAGE</button>
          </form>
      </section>

            {/* FOOTER SECTION */}

      <footer>
          <div className="footer-content">
              <div className="footer-section">
                  <h3>Navigation</h3>
                  <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#experience">Experience</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#achievements">Achievements</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#contact">Contact</a></li>
                  </ul>
              </div>
              
              <div className="footer-section">
                  <h3>Services</h3>
                  <ul>
                      <li><a href="#">Web Design</a></li>
                      <li><a href="#">UI/UX</a></li>
                      <li><a href="#">Frontend Development</a></li>
                      <li><a href="#">Backend Development</a></li>
                      <li><a href="#">Data Analytics</a></li>
                      <li><a href="#">IT Support</a></li>
                  </ul>
              </div>
              
              <div className="footer-section">
                  <h3>Connect</h3>
                  <p style={{color: 'var(--text-secondary)', marginBottom: '10px'}}>
                      Let&apos;s build something amazing together
                  </p>
                  <div className="social-links">
                      <a href="https://github.com/jovankawilyam" aria-label="GitHub">
                          <svg width="20" height="20" fill="currentColor" viewBox="2 0 20 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                          </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/jovanka-muzaki-84011337a/" aria-label="LinkedIn">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                      </a>
                      <a href="https://www.instagram.com/jovankawilyamm" target="_blank" aria-label="Instagram">
                           <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm4.75-.88a1.13 1.13 0 1 1-2.26 0a1.13 1.13 0 0 1 2.26 0z"/>
                          </svg>
                      </a>
                      <a href="https://wa.me/6281911883609" target="_blank" aria-label="Whatsapp">
                           <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
          
          <div className="footer-bottom">
              <p>&copy; 2025 by jovankawilyam</p>
          </div>
      </footer>
    </>
  );
}

