import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function AidePage() {
  const faqs = [
    {
      category: "Commandes et Livraison",
      questions: [
        {
          q: "Comment suivre ma commande ?",
          a: "Vous recevrez un email de confirmation avec un numéro de suivi dès l'expédition de votre commande. Vous pouvez aussi consulter l'état de votre commande dans votre compte client."
        },
        {
          q: "Quels sont les délais de livraison ?",
          a: "Les délais de livraison sont de 2-3 jours ouvrés en France métropolitaine. Pour les autres destinations, comptez 5-7 jours ouvrés."
        },
        {
          q: "Puis-je modifier ma commande ?",
          a: "Vous avez 1 heure après validation de votre commande pour la modifier. Passé ce délai, contactez notre service client."
        }
      ]
    },
    {
      category: "Produits et Garantie",
      questions: [
        {
          q: "Quelle est la durée de garantie ?",
          a: "Tous nos produits bénéficient d'une garantie constructeur de 2 ans. La garantie couvre les défauts de fabrication et de matériaux."
        },
        {
          q: "Comment faire une réclamation de garantie ?",
          a: "Rendez-vous dans votre espace client ou contactez notre support technique. Munissez-vous de votre numéro de série et de votre facture d'achat."
        },
        {
          q: "Puis-je retourner un produit ?",
          a: "Vous disposez de 14 jours pour retourner un produit. Le produit doit être dans son emballage d'origine et en parfait état."
        }
      ]
    },
    {
      category: "Support Technique",
      questions: [
        {
          q: "Comment réinitialiser mon appareil ?",
          a: "Maintenez le bouton d'alimentation enfoncé pendant 10 secondes. Votre appareil redémarrera automatiquement avec les paramètres d'usine."
        },
        {
          q: "Mon appareil ne s'allume plus, que faire ?",
          a: "Vérifiez d'abord que la batterie n'est pas déchargée. Connectez le chargeur pendant au moins 30 minutes avant de réessayer."
        },
        {
          q: "Comment mettre à jour mon système ?",
          a: "Allez dans Paramètres > Système > Mise à jour. Votre appareil recherchera automatiquement les mises à jour disponibles."
        }
      ]
    }
  ];

  return (
    <PageLayout title="Centre d'Aide">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Search Bar */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comment pouvons-nous vous aider ?
            </h2>
            <div className="max-w-2xl mx-auto relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans l'aide..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <Link href="/support/contact" className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nous contacter</h3>
              <p className="text-gray-600">Support personnalisé</p>
            </Link>

            <Link href="/support/garantie" className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantie</h3>
              <p className="text-gray-600">Conditions et procédures</p>
            </Link>

            <Link href="/support/reparations" className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Réparations</h3>
              <p className="text-gray-600">Service après-vente</p>
            </Link>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guides</h3>
              <p className="text-gray-600">Manuels et tutoriels</p>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <details className="group">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                          <svg className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-50 rounded-3xl p-12 mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe support est là pour vous aider 24h/24, 7j/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/support/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Contacter le support
              </Link>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Chat en direct
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 