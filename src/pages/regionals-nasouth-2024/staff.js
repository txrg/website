import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import imageStaffCarminapiranha from '../../images/regionals-nasouth-2024/staff-heads-carminapiranha.png';
import imageStaffGrahamReaper from '../../images/regionals-nasouth-2024/staff-heads-grahamreaper.png';
import imageStaffIcequeen from '../../images/regionals-nasouth-2024/staff-heads-icequeen.png';
import imageStaffJamesbondage from '../../images/regionals-nasouth-2024/staff-heads-jamesbondage.png';
import imageStaffJaminycricket from '../../images/regionals-nasouth-2024/staff-heads-jaminycricket.png';
import imageStaffPrmageddon from '../../images/regionals-nasouth-2024/staff-heads-prmageddon.png';
import imageStaffThadoctah from '../../images/regionals-nasouth-2024/staff-heads-thadoctah.png';
import imageStaffTrashpanda from '../../images/regionals-nasouth-2024/staff-heads-trashpanda.png';
import imageStaffWolverine from '../../images/regionals-nasouth-2024/staff-heads-wolverine.png';

const StaffAndVolunteersPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-staff">
                <section className='regionals-staff-header'>
                    <div className="regionals-staff-header-image"></div>
                </section>
                <Navigation />
                <section className='regionals-staff-signups'>
                    <div className='regionals-staff-signups-columns'>
                        <div className="regionals-staff-signups-option theme-1">
                            <div className="regionals-staff-signup-title">OFFICIALS</div>
                            <div className="regionals-staff-signup-subtitle">TODO</div>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Apply Here!</button>
                            </a>
                        </div>
                        <div className="regionals-staff-signups-option theme-1">
                            <div className="regionals-staff-signup-title">ANNOUNCERS</div>
                            <div className="regionals-staff-signup-subtitle">TODO</div>
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
                            <div className="regionals-staff-signup-subtitle">Willing and qualified to help kepp our athletes safe as they play the game?</div>
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
                    <div className='regionals-staff-heads-title'>TODO: STAFF HEADS</div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffThadoctah} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Tha Doctah <span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head NSO</summary>
                                    <p>With 13 years of officiating experience, Doctah brings his knowledge and expertise to being THNSO of Y'Allstars for the second time. Doctah has participated in a variety of events locally and afar, including the 2019 WFTDA International Playoffs in Winston-Salem, NC and 2016 MRDA Championships in Dallas, TX. Doctah has also been the THNSO for the 2018 Clover Cup in Dallas, TX, and 2018 SweatFest in New Orleans, LA.</p>
                                    <p>Tha Doctah hopes this event provides opportunity for officials to get experience working in a multi-game style event and helps to grow the officiating community.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffWolverine} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Wolverine< span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head NSO</summary>
                                    <p>Wolverine has been involved in roller derby since late 2016. Since that time, he has been all over the country for the sport. He loves helping to teach and as well as being able to learn from all the wonderful people in the community. Wolverine served as the THNSO at the MRDA Western Hemisphere Cup and was a part of the inaugural Y'Allstars NSO Krewe in 2023. He also helped Springfield Roller Derby start the Show Me Skate tournament in 2023 and has been a part of Dallas Derby Devils' Clover Cup since 2018. Wolverine can't wait to be able to work with this year's krewe and help Y'Allstars 2024 be the best that it can be!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffJaminycricket} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Jaminy Cricket <span className="regionals-staff-pronouns">(they/them)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Ref</summary>
                                    <p>After starting as a skater in 2014, Cricket began their reffing career in 2016 and never looked back. Since then, Cricket has served as a local ref for both Red Stick Roller Derby and Big Easy Roller Derby. They have also traveled with RSRD to multiple out-of-state games and tournaments, where they have absorbed additional learning from fellow referees.</p>
                                    <p>Cricket is back for a second year as THR for Y'Allstars and also previously served as a Crew Head at the 2019 Battle of the Boot in Lafayette, LA. They are excited to work with officials and staff in this role and hope everyone has a great time at the tournament!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffJamesbondage} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>James Bondage <span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Ref</summary>
                                    <p>James Bondage started his officiating career in 2010 and several years later, became Big Easy Roller Derby's Head of Officials. He now has 13 years and over 200 games under his belt. Bondage has officiated various events, including WFTDA, MRDA and JRDA sanctioned games, in various capacities. Not only does he officiate games for Big Easy Roller Derby, he also travels and lends his officiating knowledge to Red Stick Roller Derby, Northshore Roller Derby and a host of other leagues in the south in a variety of ways, including working with their newer officials who are learning to become their respective leagues crew heads.</p>
                                    <p>Bondage has previously officiated in several tournaments, including Sweatfest, the Mythical Invitational and last year's inaugural Y'allstars Tournament. As a WFTDA Certified Official, James Bondage is looking forward to serving, for the first time, as Co-THR for the 2024 Y'Allstars tournament and is excited to work with everyone who will be participating.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffIcequeen} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Ice Queen <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Games Tournament Oversight</summary>
                                    <p>Ice Queen hails from Texas and has been officiating since January 2013. She has just shy of 400 games experience, having officiated games in multiple states and tournaments, including working as a non-skating official at the 2023 Y'Allstars. Ice believes in fostering fair play, providing resources to other officials/athletes, sportsmanship, and the spirit of competition that makes roller derby. She's looking forward to continuing this thrilling journey, meeting fellow skaters, officials, and fans along the way. Let's roll together and make every game an unforgettable experience!</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffPrmageddon} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>PR Mageddon <span className="regionals-staff-pronouns">(he/him)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Head Announcer</summary>
                                    <p>Based in New Orleans, PR is the announcer/emcee for Big Easy Roller Derby. Since becoming an announcer in 2015, PR has called or emceed more than 260 games and events across North America. His credentials include MRDA Championships (2016), WFTDA Championships (2018, 2019), and Battle of the All Stars (2018, 2019), where he called for Team Louisiana. He also served as THA for Y'Allstars 2023 and BERD's Sweatfest (2017, 2018).</p>
                                    <p>When not on the mic, PR serves as vice president of the Roller Derby Announcer Association's Board of Directors, where he works to advance the craft of derby announcing via education, networking and mentoring up-and-coming voices.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffTrashpanda} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Trash Panda <span className="regionals-staff-pronouns">(she/her)</span></div>
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
                            <img src={imageStaffCarminapiranha} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Carmina Piranha <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Organizing Co-Chair</summary>
                                    <p>After 2 years of building mega-brackets and overseeing policy for Battle of the All Stars (2019, 2020), Mina is excited to once again be at the helm of Louisiana's very own collective tournament.</p>
                                    <p>Mina began her derby journey in 2013 with Burning River Roller Derby and currently skates with Team Louisiana and Red Stick Roller Derby. She is also an alum of Team Ohio and Big Easy Roller Derby. Mina has served on volunteer staff for the 2015 WFTDA D2 Playoffs (Cleveland) and 2018 WFTDA Champs. She was the recipient of the Kitty Klime award at BOTAS in 2019.</p>
                                    <p>She hopes everyone has the best time ever.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className='regionals-staff-heads-official'>
                        <div className='regionals-staff-heads-official-column1'>
                            <img src={imageStaffGrahamReaper} alt="Official"></img>
                        </div>
                        <div className='regionals-staff-heads-official-column2'>
                            <div className='regionals-staff-heads-official-subtitle'>Graham Reaper <span className="regionals-staff-pronouns">(she/her)</span></div>
                            <div className="regionals-staff-heads-official-position">
                                <details>
                                    <summary>Tournament Organizing Co-Chair</summary>
                                    <p>Reaper was born and raised in Jackson, MS, loves Diet Coke, and in her day job works as the Operations Manager for the Mississippi Children's Museum. She's been in the hospitality and events industry for almost 20 years, and absolutely LOVES what she does.</p>
                                    <p>In 2012, Reaper joined a little drunken adult kickball league, and the captain of the team was also the president of the local roller derby league, Capital City Roller Girls, now known as JXN Roller Derby. Typical story, girl meets derby; girl is hooked. Reaper skated for about 8 years; her skating career included dual rostering with Mississippi Brawlstars & Northshore Roller Derby, a brief stint with Denver Roller Derby's home team, the Green Barrettes, and captaining Team Mississippi for a trip to State Wars in Daytona Beach. After a car wreck, Reaper gave up playing, but took to bench coaching and derby event organizing to stay active in the sport she loves so much.</p>
                                    <p>Reaper is excited for Y'Allstars to bring the derby community some great derby match-ups, a space for so many different skaters to participate, and a little something different and new when it comes to roller derby tournaments.</p>
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