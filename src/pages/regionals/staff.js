import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';
import imageRunningGirl from '../../images/runninggirl.png';

const StaffAndVolunteersPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-staff">
                <section className='regionals-staff-header'>
                    <div className="regionals-staff-header-image"></div>
                    <div className="regionals-staff-header-title">Staff & Volunteers</div>
                </section>
                <Navigation />
                <section className='regionals-staff-signups'>
                    <div className='regionals-staff-signups-columns'>
                        <div className="regionals-staff-signups-option theme-1">
                            <div className="regionals-staff-signup-title">OFFICIALS</div>
                            <div className="regionals-staff-signup-subtitle">Want to officiate a game at an official regionals tournament?</div>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Apply Here!</button>
                            </a>
                        </div>
                        <div className="regionals-staff-signups-option theme-1">
                            <div className="regionals-staff-signup-title">ANNOUNCERS</div>
                            <div className="regionals-staff-signup-subtitle">Ready to take the mic and speak to the derby world?</div>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Apply Here!</button>
                            </a>
                        </div>
                    </div>
                    <div className='regionals-staff-signups-columns'>
                        <div className="regionals-staff-signups-option theme-3">
                            <div className="regionals-staff-signup-title">VOLUNTEERS</div>
                            <div className="regionals-staff-signup-subtitle">Want to help keep things running at the tournament all weekend long?</div>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Apply Here!</button>
                            </a>
                        </div>
                        <div className="regionals-staff-signups-option theme-3">
                            <div className="regionals-staff-signup-title">MEDICS</div>
                            <div className="regionals-staff-signup-subtitle">Willing and qualified to help keep our athletes safe as they play the game?</div>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Apply Here!</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-staff-signups-rows">
                        <div className="regionals-staff-signups-option theme-2">
                            <div className="regionals-staff-signup-title">PHOTOGRAPHERS & VIDEOGRAPHERS</div>
                            <div className="regionals-staff-signup-subtitle">Looking to capture the action on your camera?</div>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Apply Here!</button>
                            </a>
                        </div>
                    </div>
                </section>
                <section className='regionals-staff-heads theme-1'>
                    <div className='regionals-staff-heads-title'>STAFF HEADS</div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Trogdora the Jaminator <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head NSO</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Darth Bling <span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Ref</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Anya Arson <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Games Tournament Oversight</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>DJ TJ <span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Announcer</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>TBD<span className="regionals-staff-pronouns"></span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Photographer</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Flannery O'Clobber <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Organizing Co-Chair</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageRunningGirl} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Miso Thorny <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Organizing Co-Chair</summary>
                                    <p>Bio coming soon!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='regionals-staff-crew theme-2'>
                    <div className='regionals-staff-crew-title'>TODO: OFFICIALS</div>
                    <div className='regionals-staff-crew-referees'>
                        <div className='regionals-staff-crew-referees-subtitle'>Referees</div>
                        <div className='regionals-staff-crew-referees-details'>
                            <p><b>THRS:</b> James Bondage & Jaminy Cricket</p>
                            <p><b>Crew Heads:</b> Daemon Mistress <i className="fa fa-hat-cowboy"/> Fighting Girlfiend <i className="fa fa-hat-cowboy" /> Mad Jack Churchkill <i className="fa fa-hat-cowboy" /> Pi-Radical</p>
                            <p>A. NUSS <i className="fa fa-hat-cowboy" /> Bianic <i className="fa fa-hat-cowboy" /> Breadpool <i className="fa fa-hat-cowboy" /> Colonel Angu <i className="fa fa-hat-cowboy" /> Croc <i className="fa fa-hat-cowboy" /> Effin' Ref <i className="fa fa-hat-cowboy" /> General Hellativity <i className="fa fa-hat-cowboy" /> G'Innes <i className="fa fa-hat-cowboy" /> Hannibull Reffer <i className="fa fa-hat-cowboy" /> I Shove Lucie <i className="fa fa-hat-cowboy" /> Jekyll & Sides <i className="fa fa-hat-cowboy" /> No Mad <i className="fa fa-hat-cowboy" /> Nopac Shakur <i className="fa fa-hat-cowboy" /> PopN Lock <i className="fa fa-hat-cowboy" /> Reffeweizen (Cahill) <i className="fa fa-hat-cowboy" /> RJ <i className="fa fa-hat-cowboy" /> Ruff Draft <i className="fa fa-hat-cowboy" /> Shrimp N Roll <i className="fa fa-hat-cowboy" /> Sidney Vicious <i className="fa fa-hat-cowboy" /> Skitzo <i className="fa fa-hat-cowboy" /> Sven Deför <i className="fa fa-hat-cowboy" /> Thrillem Dafoe <i className="fa fa-hat-cowboy" /> UKnowIKnowUKnow <i className="fa fa-hat-cowboy" /> Yulneda Rehab</p>
                        </div>
                    </div>
                    <div className='regionals-staff-crew-nsos'>
                        <div className='regionals-staff-crew-nsos-subtitle'>Non-Skating Officials</div>
                        <div className='regionals-staff-crew-nsos-details'>
                            <p><b>THNSOs:</b> Tha Doctah & Wolverine</p>
                            <p><b>Crew Heads:</b> Montana Maulher <i className="fa fa-hat-cowboy" /> Officially Mel <i className="fa fa-hat-cowboy" /> TexAss Tornado</p>
                            <p>Ada <i className="fa fa-hat-cowboy" /> Baby Snark <i className="fa fa-hat-cowboy" /> Baron von Erin <i className="fa fa-hat-cowboy" /> Bourbon Decay <i className="fa fa-hat-cowboy" /> Candied Bacon <i className="fa fa-hat-cowboy" /> Chemical Restraint <i className="fa fa-hat-cowboy" /> Fox40 <i className="fa fa-hat-cowboy" /> Fun Police <i className="fa fa-hat-cowboy" /> Identity Crisis <i className="fa fa-hat-cowboy" /> Ivana Rage <i className="fa fa-hat-cowboy" /> Kupcake <i className="fa fa-hat-cowboy" /> Lucky D. Irish <i className="fa fa-hat-cowboy" /> Mala Suerte <i className="fa fa-hat-cowboy" /> Maza-Liam <i className="fa fa-hat-cowboy" /> Mizery Chop <i className="fa fa-hat-cowboy" /> Penny Painful <i className="fa fa-hat-cowboy" /> Psylocked <i className="fa fa-hat-cowboy" /> Punishher <i className="fa fa-hat-cowboy" />Rocket Chop <i className="fa fa-hat-cowboy" /> Roslambo <i className="fa fa-hat-cowboy" /> Ruth Slayer <i className="fa fa-hat-cowboy" /> Shinsberg <i className="fa fa-hat-cowboy" /> SOS <i className="fa fa-hat-cowboy" /> Susan B. Blasphemy <i className="fa fa-hat-cowboy" /> Tornado Allie <i className="fa fa-hat-cowboy" /> Venus Thigh Trap <i className="fa fa-hat-cowboy" /> WinceDay Addams</p>
                        </div>
                    </div>
                </section>
                <section className='regionals-staff-announcers theme-1'>
                    <div className='regionals-staff-announcers-title'>TODO: Announcers</div>
                    <div className='regionals-staff-announcers-details'>
                        <p><b>THA:</b> PR Mageddon</p>
                        <p>Belligerent Bex <i className="fa fa-hat-cowboy" /> Blayde <i className="fa fa-hat-cowboy" /> addyPants <i className="fa fa-hat-cowboy" /> Johnny Pepper <i className="fa fa-hat-cowboy" /> Muffin Tumble <i className="fa fa-hat-cowboy" /> Nikki Trikki Savi <i className="fa fa-hat-cowboy" /> Pin Pushion <i className="fa fa-hat-cowboy" /> Rainbow Spite <i className="fa fa-hat-cowboy" /> Ruth Banshee Ginsburg <i className="fa fa-hat-cowboy" /> Scar Trek <i className="fa fa-hat-cowboy" /> Snarlet Fever <i className="fa fa-hat-cowboy" /> Thin Mint <i className="fa fa-hat-cowboy" /> Whistles <i className="fa fa-hat-cowboy" /> Wrecking Bill</p>
                    </div>
                </section>
                <section className='regionals-staff-photographers theme-3'>
                    <div className='regionals-staff-photographers-title'>TODO: PHOTOGRAPHERS & VIDEOGRAPHERS</div>
                    <div className='regionals-staff-photographers-details'>
                        <p><b>THP:</b> Trash Panda</p>
                        <p>Chris Albright <i className="fa fa-hat-cowboy" /> Jenna Beth Beber <i className="fa fa-hat-cowboy" /> Steven Davis <i className="fa fa-hat-cowboy" /> David Dyte <i className="fa fa-hat-cowboy" /> Michael Fairchild <i className="fa fa-hat-cowboy" /> Paige Luper <i className="fa fa-hat-cowboy" /> William McDowell <i className="fa fa-hat-cowboy" /> Geremy Ruest</p>
                    </div>
                </section>
                <section className='regionals-staff-contact theme-2'>
                    <div className='regionals-staff-contact-title'>WANNA CHIP IN?</div>
                    <div className='regionals-staff-contact-details'>
                        <p>Interested in helping out in another role? We'd love to have you involved! Please send us an e-mail at <a href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a> to let us know you're interested!</p>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default StaffAndVolunteersPage;