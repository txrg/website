import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';

const HospitalityPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-hospitality">
                <Navigation />
            </main>
            <Footer />
        </Layout>
    );
}

export default HospitalityPage;