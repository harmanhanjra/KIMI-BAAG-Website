import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductCard } from '@/components/ui/ProductCard';
import { getCollectionBySlug } from '@/data/collections';
import { getProductsByCollection } from '@/data/products';
import { motion } from 'framer-motion';

export function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug || '');
  const collectionProducts = collection
    ? getProductsByCollection(collection.slug)
    : [];

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1E9DC]">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Collection Not Found</h1>
          <Link to="/shop" className="text-[#541F2B] hover:underline text-sm">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${collection.name} | BAAG`}
        description={collection.description}
        image={collection.image}
        url={`/collections/${collection.slug}`}
      />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        {/* Collection Hero */}
        <div className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase mb-3 text-white/80">
                Collection
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                DROP 001
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: collection.name }]} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-[#111111]/70 leading-relaxed">
              {collection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {collectionProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
