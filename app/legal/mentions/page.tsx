import PageLayout from '@/components/PageLayout';

export default function MentionsPage() {
  return (
    <PageLayout title="Mentions Légales">
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Dernière mise à jour : 15 décembre 2024
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Éditeur du site</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Aura Technologies SAS</strong></p>
              <p className="text-gray-700 mb-2">Siège social : 123 Avenue de l'Innovation, 75001 Paris, France</p>
              <p className="text-gray-700 mb-2">Capital social : 1 000 000 €</p>
              <p className="text-gray-700 mb-2">RCS Paris : 123 456 789</p>
              <p className="text-gray-700 mb-2">SIRET : 123 456 789 00012</p>
              <p className="text-gray-700">TVA Intracommunautaire : FR12 123456789</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Directeur de la publication</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Marie Dubois, Directrice Générale d'Aura Technologies SAS
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hébergement</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Vercel Inc.</strong></p>
              <p className="text-gray-700 mb-2">340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p className="text-gray-700">Site web : vercel.com</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Protection des données</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
              de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement. 
              Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-700">
                Pour toute question relative aux mentions légales :
                <br />
                <a href="mailto:legal@aura.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  legal@aura.com
                </a>
                <br />
                Téléphone : +33 1 23 45 67 89
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 