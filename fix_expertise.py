with open('src/components/ExpertiseServicesSection.tsx', 'r') as f:
    content = f.read()

content = content.replace("Strategic Deployment with Gopal Ahuja", "Investing with Gopal Ahuja")
content = content.replace("Expert guidance navigating institutional capital allocation, masterplan acquisitions, and ultra-prime private wealth real estate across the UAE.", "Expert guidance across land acquisition, high-yield investments, and luxury residential properties.")

services_array_old = """  const services = [
    {
      id: '01',
      title: 'Algorithmic Underwriting',
      description: 'Data-driven spatial intelligence to evaluate master corridors, forecast capital yield, and validate institutional investments.'
    },
    {
      id: '02',
      title: 'Land & Masterplan Acquisition',
      description: 'Strategic sourcing and feasibility structuring for sovereign funds, family offices, and Tier-1 developers.'
    },
    {
      id: '03',
      title: 'Portfolio Structuring',
      description: 'Bespoke capital allocation and diversification models designed for long-term wealth preservation and aggressive ROI.'
    },
    {
      id: '04',
      title: 'Off-Market Trophy Assets',
      description: 'Exclusive private access to ultra-prime luxury residences, penthouses, and unlisted developer inventory for HNWIs.'
    },
    {
      id: '05',
      title: 'Yield & Asset Management',
      description: 'End-to-end oversight of asset performance, maximizing net absolute profit and executing high-value exit strategies.'
    },
    {
      id: '06',
      title: 'Global Wealth Concierge',
      description: 'White-glove facilitation covering international legal structuring, golden visas, and bespoke move-in readiness.'
    }
  ];"""

services_array_new = """  const services = [
    {
      id: '01',
      title: 'Data-Driven Market Analysis',
      description: 'I evaluate the best locations and forecast your exact returns so you can invest with absolute confidence.'
    },
    {
      id: '02',
      title: 'Land & Development Sourcing',
      description: 'I source the best development plots and structure profitable deals for funds, family offices, and top-tier builders.'
    },
    {
      id: '03',
      title: 'Portfolio Strategy',
      description: 'Together, we build a personalized investment plan designed to protect your wealth and deliver high returns over time.'
    },
    {
      id: '04',
      title: 'Off-Market Luxury Properties',
      description: 'Get exclusive access to Dubai’s finest penthouses, luxury villas, and unlisted developer inventory before anyone else.'
    },
    {
      id: '05',
      title: 'Post-Sale Asset Management',
      description: 'I don\\'t just help you buy; I manage your property\\'s performance to maximize your rental income and final selling price.'
    },
    {
      id: '06',
      title: 'End-to-End VIP Support',
      description: 'From organizing your UAE Golden Visa and legal paperwork to getting your new home perfectly ready for move-in, I handle it all.'
    }
  ];"""

content = content.replace(services_array_old, services_array_new)

with open('src/components/ExpertiseServicesSection.tsx', 'w') as f:
    f.write(content)
