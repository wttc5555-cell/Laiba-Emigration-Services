import React, { useState } from 'react';
import {
  Camera,
  Calendar,
  MapPin,
  Users,
  X,
  Sparkles,
  Maximize2,
  CheckCircle2,
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/mockData';
import { GalleryPhoto } from '../types';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (selectedCategory === 'all') return true;
    return photo.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Camera className="w-3.5 h-3.5" />
              <span>Operational Visual Archive</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ground Operations & Flight Departures
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Real snapshots of candidate pre-departure orientations, corporate trade evaluations in our workshops, and successful airport farewells.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Segmented Filter Control */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap p-1 bg-slate-100 rounded-xl gap-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Photos ({GALLERY_PHOTOS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('orientation')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'orientation'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pre-Departure Orientation
            </button>
            <button
              onClick={() => setSelectedCategory('departure')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'departure'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Airport Departures
            </button>
            <button
              onClick={() => setSelectedCategory('testing')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'testing'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Trade Skill Testing
            </button>
            <button
              onClick={() => setSelectedCategory('office')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === 'office'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corporate Offices
            </button>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            Showing {filteredPhotos.length} Documented Activities
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-medium flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click to Expand</span>
                  </span>
                </div>
                {photo.batchCode && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-slate-950/80 text-amber-400 px-2 py-0.5 rounded backdrop-blur-xs border border-white/10">
                    {photo.batchCode}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{photo.location}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{photo.date}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-900 transition-colors">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                {photo.candidatesCount && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{photo.candidatesCount} Candidates Deployed</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
            onClick={() => setLightboxPhoto(null)}
          />
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl z-10 border border-slate-200">
            <div className="relative aspect-16/9 bg-slate-950">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-bold uppercase mb-1">
                <span>{lightboxPhoto.location}</span>
                <span>·</span>
                <span>{lightboxPhoto.date}</span>
                {lightboxPhoto.batchCode && (
                  <>
                    <span>·</span>
                    <span className="text-slate-500">{lightboxPhoto.batchCode}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {lightboxPhoto.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {lightboxPhoto.description}
              </p>
              {lightboxPhoto.candidatesCount && (
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 font-medium">
                  Verified Batch Size: {lightboxPhoto.candidatesCount} Deployed Candidates
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
