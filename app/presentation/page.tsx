import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

export default function PresentationPage() {
  return (
    <PageLayout title="Présentation Aura">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Main Video Player */}
          <div className="bg-black rounded-3xl overflow-hidden mb-20 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-white/30 transition-colors cursor-pointer">
                  <PlayIcon className="w-16 h-16 text-white ml-2" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Présentation Officielle Aura 2024</h2>
                <p className="text-xl text-blue-200 mb-8">Découvrez l'avenir de la technologie</p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-sm text-gray-300">Durée: 12:34</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-sm text-gray-300">4K Ultra HD</span>
                </div>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <PlayIcon className="w-6 h-6 text-white ml-0.5" />
                  </button>
                  <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <SpeakerWaveIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="text-white text-sm">
                  00:00 / 12:34
                </div>
              </div>
              <div className="mt-4 w-full bg-white/20 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full w-0"></div>
              </div>
            </div>
          </div>

          {/* Chapter Navigation */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Chapitres</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { time: '00:00', title: 'Introduction', description: 'Bienvenue dans l\'ère Aura' },
                { time: '02:15', title: 'Design', description: 'L\'art de la simplicité' },
                { time: '05:30', title: 'Performance', description: 'Puissance redéfinie' },
                { time: '09:45', title: 'Innovation', description: 'Technologie de demain' },
              ].map((chapter, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <PlayIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">{chapter.time}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{chapter.title}</h4>
                  <p className="text-sm text-gray-600">{chapter.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Convaincu par Aura ?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Découvrez notre gamme complète et trouvez l'Aura qui vous correspond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/acheter" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Voir les produits
              </Link>
              <Link href="/decouvrir" className="border border-gray-400 text-gray-300 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 