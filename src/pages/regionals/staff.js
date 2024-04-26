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
                            <div className="regionals-staff-bio-image-border">
                                <div className="regionals-staff-bio-image-darthbling"></div>
                            </div>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Darth Bling <span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Ref</summary>
                                    <p>
                                        Darth Bling has been officiating for 13 years and has worked over 1000 games during his career. He was most recently the THR for 2019 WFTDA Playoffs in Seattle and also officiated 2019 WFTDA Championships in Montreal. When not doing all the officiating, Bling also coaches junior roller derby. Starting in 2014, he began coaching the Death Scar Derby Droids, one of Rose City's junior home teams. And then in 2017 he also started coaching the Rosebuds All-Stars, who recently won gold at JRDA Championships in 2022 and then won silver in 2023. Bling has also been serving as the WFTDA Rules Chair since 2019.
                                    </p>
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
                            <div className="regionals-staff-bio-image-border">
                                <div className="regionals-staff-bio-image-flanneryoclobber"></div>
                            </div>
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
                            <div className="regionals-staff-bio-image-border">
                                <div className="regionals-staff-bio-image-misothorny"></div>
                            </div>
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
                    <div className='regionals-staff-crew-title'>OFFICIALS</div>
                    <div className='regionals-staff-crew-referees'>
                        <div className='regionals-staff-crew-referees-subtitle'>Skating Officials</div>
                        <div className='regionals-staff-crew-referees-details'>
                            <p><b className="regionals-staff-sectiontitle">THR:</b>&nbsp;&nbsp;Darth Bling</p>
                            <p><b className="regionals-staff-sectiontitle">Crew Heads:</b>&nbsp;&nbsp;Zero Factorial&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;Kilt Trip&nbsp;&nbsp;<i className="fa fa-hat-cowboy" />&nbsp;&nbsp;Refty Venture</p>
                            <p>
                                biANic&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Chewbackoffa&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Effin’ Ref&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Ella Noise&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Ice Queen&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Jacques Strappe&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Jaminy Cricket&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Jekyll & Sides&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Jim Class Hero&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Kat A Killzem&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Laddie&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                O. Yoshi Dint&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Ruff Draft&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Shrimp N Roll&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                STOnasty&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Web Lynx&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Will Ryder&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Xtra ChrisP
                            </p>
                        </div>
                    </div>
                    <div className='regionals-staff-crew-nso'>
                        <div className='regionals-staff-crew-nsos-subtitle'>Non-Skating Officials</div>
                        <div className='regionals-staff-crew-nsos-details'>
                            <p><b className='regionals-staff-sectiontitle'>THNSO:</b>&nbsp;&nbsp;Trogdora the Jaminator</p>
                            <p>
                                <b className='regionals-staff-sectiontitle'>Crew Heads:</b>&nbsp;&nbsp;
                                Chemical Restraint&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Quick Grayson&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Roslambo
                            </p>
                            <p>
                                4s Mush Her&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Aggie Battery&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Bruise Almighty&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Callegory&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Decider&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Doesn’t Matt-er&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Galvatron&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Huggins&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Joss&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Kate Tastrophe&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Lemon Stinger&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Mala Suerte&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Mama Vader&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Montana Maulher&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Mortal Komkat&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Mother Flippin Artist&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Ms. Judgment&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                NoMad&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Officially Mel&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Queen of Katitude&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Silken Tofu&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Tha Doctah&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Toxic Marcotic&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                TRebel Maker&nbsp;&nbsp;<i className="fa fa-hat-cowboy"/>&nbsp;&nbsp;
                                Wishbone Breaker
                            </p>
                        </div>
                    </div>
                </section>
                <section className='regionals-staff-announcers theme-1'>
                    <div className='regionals-staff-announcers-title'>Announcers</div>
                    <div className='regionals-staff-announcers-details'>
                        <p><b>THA:</b>&nbsp;&nbsp;TBD</p>
                        <p>Coming soon!</p>
                    </div>
                </section>
                <section className='regionals-staff-photographers theme-3'>
                    <div className='regionals-staff-photographers-title'>PHOTOGRAPHERS & VIDEOGRAPHERS</div>
                    <div className='regionals-staff-photographers-details'>
                        <p><b>THP:</b>&nbsp;&nbsp;TBD</p>
                        <p>Coming soon!</p>
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