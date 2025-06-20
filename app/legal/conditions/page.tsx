import PageLayout from '@/components/PageLayout';

export default function ConditionsPage() {
  return (
    <PageLayout title="Conditions d'Utilisation">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Dernière mise à jour : 15 décembre 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptation des conditions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              En utilisant nos services, vous acceptez d'être lié par ces conditions d'utilisation. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Utilisation des services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions légales</h3>
              <p className="text-gray-700">
                Pour toute question concernant ces conditions d'utilisation, contactez notre service juridique à :
                <br />
                <a href="mailto:legal@aura.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  legal@aura.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 