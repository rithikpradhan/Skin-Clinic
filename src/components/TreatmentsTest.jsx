import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { urlFor } from "../lib/imageBuilder";

export default function TreatmentsTest() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "treatment"]{
        title,
        description,
        image
      }`,
      )
      .then((data) => setTreatments(data));
  }, []);

  return (
    <div>
      <h2>Treatments From CMS</h2>

      {treatments.map((t, i) => (
        <div key={i}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>

          {t.image && (
            <img src={urlFor(t.image).width(200).url()} alt={t.title} />
          )}
        </div>
      ))}
    </div>
  );
}
