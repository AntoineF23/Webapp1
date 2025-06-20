import PageLayout from '@/components/PageLayout';

export default function ConfidentialitePage() {
  return (
    <PageLayout title="Politique de Confidentialité">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Dernière mise à jour : 15 décembre 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Collecte des informations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Utilisation des données</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Partage des informations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sécurité des données</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
              commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
              corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
              qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-700">
                Pour toute question concernant cette politique de confidentialité, contactez-nous à :
                <br />
                <a href="mailto:privacy@aura.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  privacy@aura.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 