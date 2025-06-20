import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <PageLayout title="Nous contacter">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-4">Lun-Ven 9h-18h</p>
              <a href="tel:+33123456789" className="text-blue-600 hover:text-blue-700 font-semibold">
                01 23 45 67 89
              </a>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chat Live</h3>
              <p className="text-gray-600 mb-4">Disponible 24h/24</p>
              <button className="text-green-600 hover:text-green-700 font-semibold">
                Démarrer le chat
              </button>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Réponse sous 24h</p>
              <a href="mailto:support@aura.com" className="text-purple-600 hover:text-purple-700 font-semibold">
                support@aura.com
              </a>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Magasins</h3>
              <p className="text-gray-600 mb-4">Assistance en personne</p>
              <Link href="/magasins" className="text-orange-600 hover:text-orange-700 font-semibold">
                Trouver un magasin
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe est là pour vous aider. Décrivez votre demande et nous vous répondrons rapidement.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="support">Support technique</option>
                    <option value="sales">Questions commerciales</option>
                    <option value="billing">Facturation</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-medium transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Heures d'ouverture</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>Samedi : 10h00 - 16h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Temps de réponse</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Chat live : Immédiat</p>
                    <p>Téléphone : Immédiat</p>
                    <p>Email : Sous 24h</p>
                    <p>Formulaire : Sous 48h</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Support technique</h4>
                  <p className="text-gray-600 mb-4">
                    Pour les problèmes techniques urgents, appelez directement notre ligne dédiée ou 
                    utilisez le chat live pour une assistance immédiate.
                  </p>
                  <Link href="/support/aide" className="text-blue-600 hover:text-blue-700 font-medium">
                    Consulter la FAQ →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 