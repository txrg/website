import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';

const StaffAndVolunteersPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-staff">
                <Navigation />
            </main>
            <Footer />
        </Layout>
    );
}

export default StaffAndVolunteersPage;