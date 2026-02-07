const listings = [
  {
    id: 1,
    name: "Blue Haven PG",
    price: 9500,
    location: "Delhi - North Campus",
    city: "Delhi",
    category: "PG",
    availability: "Available Now",
    emergencyStay: true,
    emergencyPrice: 900,
    owner: { name: "Rohit Singh", phone: "+91 91234 56789" },
    amenities: ["Wi-Fi", "Meals", "Laundry", "Study Room"],
    description:
      "Peaceful PG designed for students with a dedicated study lounge, healthy meals, and secure entry.",
    images: [
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/Scxs7L0vhZ4",
  },
  {
    id: 2,
    name: "Skyline Hostel",
    price: 12000,
    location: "Noida - Sector 62",
    city: "Noida",
    category: "Hostel",
    availability: "Next Week",
    emergencyStay: false,
    emergencyPrice: null,
    owner: { name: "Anita Verma", phone: "+91 99887 66554" },
    amenities: ["Biometric Entry", "Gym", "Mess", "Housekeeping"],
    description:
      "Modern hostel with biometric entry, gym access, and a student-friendly environment near coaching hubs.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 3,
    name: "StudyHub Library",
    price: 3500,
    location: "Pune - Shivaji Nagar",
    city: "Pune",
    category: "Library",
    availability: "Available Now",
    emergencyStay: false,
    emergencyPrice: null,
    owner: { name: "Sahil Kulkarni", phone: "+91 90909 12121" },
    amenities: ["24/7 Access", "AC", "Power Backup", "Lockers"],
    description:
      "Quiet study library with individual desks, AC comfort, and secure lockers for exam prep.",
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491841651911-c44c30c34548?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 4,
    name: "FitZone Gym",
    price: 2500,
    location: "Bangalore - Indiranagar",
    city: "Bangalore",
    category: "Gym",
    availability: "Available Now",
    emergencyStay: false,
    emergencyPrice: null,
    owner: { name: "Maya Joseph", phone: "+91 97777 66655" },
    amenities: ["Certified Trainers", "Shower Rooms", "Flexible Timings"],
    description:
      "Student-only gym with trainer-led sessions and flexible timing for college schedules.",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/VYOjWnS4cMY",
  },
  {
    id: 5,
    name: "Sunrise Mess",
    price: 3200,
    location: "Lucknow - Aliganj",
    city: "Lucknow",
    category: "Mess",
    availability: "Next Month",
    emergencyStay: false,
    emergencyPrice: null,
    owner: { name: "Rahul Gupta", phone: "+91 95555 22211" },
    amenities: ["Veg Menu", "Hygienic Kitchen", "Monthly Plans"],
    description:
      "Healthy home-style meals with rotating menus and student discounts.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
  },
  {
    id: 6,
    name: "Blue Ridge 1BHK",
    price: 16000,
    location: "Pune - Hinjewadi",
    city: "Pune",
    category: "1BHK",
    availability: "Available Now",
    emergencyStay: true,
    emergencyPrice: 1200,
    owner: { name: "Neha Kapoor", phone: "+91 98888 33221" },
    amenities: ["Furnished", "Kitchenette", "Wi-Fi", "Balcony"],
    description:
      "Compact 1BHK for students who want privacy, with furnished interiors and fast Wi-Fi.",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/Scxs7L0vhZ4",
  },
  {
    id: 7,
    name: "Green Nest 2BHK",
    price: 21000,
    location: "Delhi - South Extension",
    city: "Delhi",
    category: "2BHK",
    availability: "Next Week",
    emergencyStay: true,
    emergencyPrice: 1500,
    owner: { name: "Karan Mehta", phone: "+91 90123 44556" },
    amenities: ["Shared Rooms", "Parking", "24/7 Security"],
    description:
      "Spacious 2BHK for group stays with verified security and shared amenities.",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    ],
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

const createCard = (listing) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <img src="${listing.images[0]}" alt="${listing.name}" />
    <div class="card-body">
      <span class="badge">${listing.category}</span>
      <h3>${listing.name}</h3>
      <p>${listing.location}</p>
      <p class="price">${formatPrice(listing.price)} / month</p>
      <div class="badge-group">
        <span class="badge verified">Verified by GyaanXpress</span>
        ${
          listing.emergencyStay
            ? '<span class="badge emergency">🟢 Emergency Stay Available</span>'
            : ""
        }
      </div>
      <a class="btn-secondary" href="property.html?id=${listing.id}">View Details</a>
    </div>
  `;
  return card;
};

const renderListings = (data, container) => {
  container.innerHTML = "";
  data.forEach((listing) => container.appendChild(createCard(listing)));
};

const initHome = () => {
  const featuredContainer = document.querySelector("[data-featured-listings]");
  if (!featuredContainer) return;
  renderListings(listings.slice(0, 3), featuredContainer);
};

const initListings = () => {
  const grid = document.querySelector("[data-listings-grid]");
  if (!grid) return;

  const typeFilter = document.getElementById("filter-type");
  const cityFilter = document.getElementById("filter-city");
  const budgetFilter = document.getElementById("filter-budget");
  const budgetValue = document.getElementById("budget-value");
  const availabilityFilter = document.getElementById("filter-availability");
  const emergencyFilter = document.getElementById("filter-emergency");

  const applyFilters = () => {
    const budget = Number(budgetFilter.value);
    budgetValue.textContent = `Up to ${formatPrice(budget)}`;

    const filtered = listings.filter((listing) => {
      const matchesType =
        typeFilter.value === "all" || listing.category === typeFilter.value;
      const matchesCity =
        cityFilter.value === "all" || listing.city === cityFilter.value;
      const matchesBudget = listing.price <= budget;
      const matchesAvailability =
        availabilityFilter.value === "all" ||
        listing.availability === availabilityFilter.value;
      const matchesEmergency =
        !emergencyFilter.checked || listing.emergencyStay;

      return (
        matchesType &&
        matchesCity &&
        matchesBudget &&
        matchesAvailability &&
        matchesEmergency
      );
    });

    renderListings(filtered, grid);
  };

  [
    typeFilter,
    cityFilter,
    budgetFilter,
    availabilityFilter,
    emergencyFilter,
  ].forEach((input) => input.addEventListener("input", applyFilters));

  applyFilters();
};

const initEmergency = () => {
  const grid = document.querySelector("[data-emergency-grid]");
  if (!grid) return;
  renderListings(listings.filter((listing) => listing.emergencyStay), grid);
};

const initPropertyDetail = () => {
  const container = document.querySelector("[data-property-detail]");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || listings[0].id;
  const listing = listings.find((item) => item.id === id) || listings[0];

  container.querySelector("[data-property-name]").textContent = listing.name;
  container.querySelector("[data-property-location]").textContent =
    listing.location;
  container.querySelector("[data-property-description]").textContent =
    listing.description;
  container.querySelector("[data-property-price]").textContent =
    `${formatPrice(listing.price)} / month`;
  container.querySelector("[data-property-emergency]").textContent =
    listing.emergencyStay
      ? `Emergency stay: ${formatPrice(listing.emergencyPrice)} / day`
      : "Emergency stay not available";

  const amenitiesList = container.querySelector("[data-property-amenities]");
  amenitiesList.innerHTML = "";
  listing.amenities.forEach((amenity) => {
    const li = document.createElement("li");
    li.textContent = amenity;
    amenitiesList.appendChild(li);
  });

  container.querySelector("[data-owner-name]").textContent = listing.owner.name;
  container.querySelector("[data-owner-phone]").textContent = listing.owner.phone;
  container.querySelector("[data-owner-whatsapp]").href =
    `https://wa.me/${listing.owner.phone.replace(/\D/g, "")}`;

  const videoWrapper = container.querySelector("[data-property-video]");
  videoWrapper.innerHTML = `<iframe src="${listing.video}" title="Video tour" allowfullscreen></iframe>`;

  const mainImage = container.querySelector("[data-gallery-main]");
  const thumbs = container.querySelector("[data-gallery-thumbs]");
  let currentIndex = 0;

  const renderGallery = () => {
    mainImage.src = listing.images[currentIndex];
    thumbs.innerHTML = "";
    listing.images.forEach((image, index) => {
      const thumb = document.createElement("img");
      thumb.src = image;
      thumb.alt = `${listing.name} ${index + 1}`;
      if (index === currentIndex) thumb.classList.add("active");
      thumb.addEventListener("click", () => {
        currentIndex = index;
        renderGallery();
      });
      thumbs.appendChild(thumb);
    });
  };

  container
    .querySelector("[data-gallery-prev]")
    .addEventListener("click", () => {
      currentIndex =
        currentIndex === 0 ? listing.images.length - 1 : currentIndex - 1;
      renderGallery();
    });

  container
    .querySelector("[data-gallery-next]")
    .addEventListener("click", () => {
      currentIndex =
        currentIndex === listing.images.length - 1 ? 0 : currentIndex + 1;
      renderGallery();
    });

  renderGallery();
};

const page = document.body.dataset.page;

switch (page) {
  case "home":
    initHome();
    break;
  case "listings":
    initListings();
    break;
  case "emergency":
    initEmergency();
    break;
  case "property":
    initPropertyDetail();
    break;
  default:
    break;
}
