import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';

const RollerDerbyInAustinPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-texas">
                <section className="regionals-texas-header">
                    <div className="regionals-texas-header-image"></div>
                    <div className="regionals-texas-header-title">Roller Derby in Texas</div>
                </section>
                <Navigation />
                <section className="regionals-texas-overview theme-1">
                    <p>There are plenty of derby leagues across the state of Texas, including both adult and juniors' (aka kids') leagues. Scroll down for the list of all active leagues!</p>
                    <p>Ready to lace up your skates and learn to play? Looking to stay updated on your local league's schedule? Reach out to the league closest to you!</p>
                </section>
                <section className="regionals-texas-leagues theme-1">
                    <div className="regionals-texas-leagues-adult">
                        <div className="regionals-texas-leagues-adult-title">Adult Roller Derby Leagues</div>
                        <div className="regionals-texas-leagues-adult-details">
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aFRA2pCOFypPSMZNavbIR4ZTU4Pe8Ec&ehbc=2E312F&noprof=1"></iframe>
                        </div>
                    </div>
                    <div className="regionals-texas-leagues-junior">
                        <div className="regionals-texas-leagues-junior-title">Junior Roller Derby Leagues</div>
                        <div className="regionals-texas-leagues-junior-details">
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1tglhtT_soA9A_rvELToXwjlcq3qOCJU&ehbc=2E312F&noprof=1"></iframe>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default RollerDerbyInAustinPage;