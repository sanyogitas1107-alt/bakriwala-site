async function seedKnowledgeHub() {
  const breeds = [
    {
      name: "Jamnapari",
      origin: "Uttar Pradesh, India",
      purpose: "Milk and Meat",
      weightRange: "60-90 kg",
      climate: "Hot and dry",
      description: "Known as the most majestic goat breed in India. They have long pendulous ears and a Roman nose. Excellent milk yielders."
    },
    {
      name: "Beetal",
      origin: "Punjab, India",
      purpose: "Milk and Meat",
      weightRange: "50-70 kg",
      climate: "Adaptable to various climates",
      description: "Similar to Jamnapari but smaller. Highly prolific and very adaptable to stall feeding, making them great for commercial farming."
    },
    {
      name: "Barbari",
      origin: "Uttar Pradesh, India",
      purpose: "Meat",
      weightRange: "30-40 kg",
      climate: "Hot and dry",
      description: "Small size and compact body. Known for their high reproductive rate (frequent twinning). Excellent for meat production."
    }
  ];

  for (const breed of breeds) {
    try {
      const response = await fetch('http://localhost:3000/api/breeds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(breed)
      });
      const data = await response.json();
      console.log(`Added: ${data.breed?.name || 'Failed'}`);
    } catch (err) {
      console.error("Error:", err);
    }
  }
}

seedKnowledgeHub();