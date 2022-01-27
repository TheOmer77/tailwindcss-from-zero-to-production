const DestinationCard = ({
  destination: { averagePrice, city, imageAlt, imageUrl, propertyCount },
}) => (
  <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-lg">
    <img className="h-32 w-32 flex-shrink-0" src={imageUrl} alt={imageAlt} />
    <div className="px-6 py-4">
      <h3 className="text-lg font-semibold text-gray-800">{city}</h3>

      <p className="text-gray-600">${averagePrice} / night average</p>
      <div className="mt-4">
        <a
          href="#"
          className="text-sm font-semibold text-brand-600 hover:text-brand-500"
        >
          Explore {propertyCount} properties
        </a>
      </div>
    </div>
  </div>
);

export default DestinationCard;
