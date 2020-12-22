export const newsDatabase = [
    {
        id: 1,
        postTime: new Date().getTime(),
        type: "news",
        title: 'Here are 10 of Arecibo’s coolest achievements',
        author: 'test dev',
        authorLink: '',
        likes: 2,
        likesInvolver: [{
            userId: 1
        },{
            userId: 2
        }],
        postBody: {
            imagesGallery: [{
                url:"https://www.sciencenews.org/wp-content/uploads/2020/12/120420_MT_arecibo_top10_feat-680x383.jpg",
                description: `The world-famous Arecibo telescope observed planets around our sun and other stars, and 
                uncovered sources of mysterious flashes of light, such as pulsars and fast radio bursts.`
            },
            {
               url: "https://www.sciencenews.org/wp-content/uploads/2020/12/120420_mt_arecibo_top10_inline1_rev.jpg",
               description: `Arecibo observations of the frequency of radio flashes from the pulsar at the center of the Crab Nebula (red star in the middle) 
               gave support to the idea that pulsars are rapidly spinning neutron stars.`
            }],
            excerpt: 'Ice on Mercury, pulsar planets and a greeting to aliens are just some of the radio telescope’s hits',
            titleImage: 'https://www.sciencenews.org/wp-content/uploads/2020/12/120420_MT_arecibo_top10_feat-680x383.jpg',
            mainText: `<h2>The sun has set on the iconic Arecibo telescope.</h2>

            <p>Since 1963, this behemoth radio telescope in Puerto Rico has observed everything from space rocks whizzing past 
            Earth to mysterious blasts of radio waves from distant galaxies. But on December 1, the 900-metric-ton platform 
            of scientific instruments above the dish came crashing down, demolishing the telescope and spelling the end of 
            Arecibo’s observing days.</p>
            
            <p>Arecibo has made too many discoveries to include in a Top 10 list, so some of its greatest hits didn’t make the 
            cut — like a strange class of stars that <a href="https://www.sciencenews.org/article/some-pulsars-lose-their-steady-beat">appear to turn on</a> and off (SN: 1/6/17), and ingredients for life in a 
            distant galaxy. But in honor of Arecibo’s 57-year tenure as one of the world’s premier observatories, here are 
            10 of the telescope’s coolest accomplishments, presented in roughly reverse order of coolness.</p>

            <h2>10. Clocking the Crab Nebula pulsar</h2>

            <p>Astronomers originally thought that apparently blinking stars called pulsars, discovered in 1967, might be pulsating 
            white dwarf stars (SN: 4/27/68). But in 1968, Arecibo saw the pulsar at the center of the Crab Nebula flashing every 
            33 milliseconds — faster than white dwarfs can pulsate. (SN: 12/7/68). That discovery strengthened the idea that 
            pulsars are actually rapidly spinning neutron stars, stellar corpses that sweep beams of radio waves around in space 
            like celestial lighthouses (SN: 1/3/20).</p>
            <img width="50%" src="https://www.sciencenews.org/wp-content/uploads/2020/12/120420_mt_arecibo_top10_inline1_rev.jpg">
            `,
            sourceOrigin: 'www.sciencenews.org',
            relativePostId: [2]

        }
    },
    {
        id: 2,
        postTime: new Date().getTime() +1 ,
        type: "news",
        title: 'An enormous supervolcano may be hiding under Alaskan islands',
        author: 'test dev 2',
        authorLink: '',
        likes: 1,
        likesInvolver: [{
            userId: 1
        }],
        postBody: {
            excerpt: 'A geologic game of connect the dots reveals hints of a giant undersea crater ',
            imagesGallery: [{
                url:"https://www.sciencenews.org/wp-content/uploads/2020/12/120420_BG_alaska-supervolcano_feat-1028x580.jpg",
                description: `The multiple volcanoes in the Islands of the Four Mountains (shown), part of the chain that make 
                up the Aleutian Islands in southwestern Alaska, appear to be connected by one large caldera created when a 
                supervolcano erupted, a new study suggests.`
            },
            {
                url: "https://www.sciencenews.org/wp-content/uploads/2020/12/120420_BG_alaska-supervolcano_inlline-desktop.png",
               description: `Some of the clues that a supervolcano may lurk under the Islands of the Four Mountains, in the Aleutian 
               Islands chain in southwest Alaska, come from seafloor topography mapping, like this bathymetry map compiled by NOAA. 
               Gray areas mark the existing volcanoes. The orange zones show shallow volcanic areas apparently connected below the surface in a roughly circular pattern.`
            }],
            titleImage: 'https://www.sciencenews.org/wp-content/uploads/2020/12/120420_BG_alaska-supervolcano_feat-1028x580.jpg',
            mainText: `
            <p>
            A mysterious, previously undiscovered supervolcano may be lurking beneath Alaska’s Aleutian Islands.</p>

            <p>
            A new study suggests a wide crater, created when the supervolcano exploded, connects at least four existing volcanoes. 
            It’s so big that if the supervolcano erupted during the last few thousand years, it could have disrupted civilizations 
            around the world, says John Power, a geophysicist at the U.S. Geological Survey’s Alaska Volcano Observatory. 
            Power presents the findings at the annual meeting of the American Geophysical Union on December 7.</p>

            <p>
            The discovery, not yet confirmed, emerged from several pieces of evidence that at first glance seem unrelated, 
            says Diana Roman, a volcanologist at Carnegie Institution for Science in Washington, D.C.  “There’s no one 
            smoking gun,” she says. And in fact, the mythical-sounding Islands of the Four Mountains, actually six volcanoes 
            located near the center of the island chain, look like an ordinary volcanic cluster.</p>

            <p>But taken together, the data point convincingly to the existence of a caldera about 20 kilometers across. 
            The volcanoes’ peaks are arranged in a ring and bathymetric seafloor mapping, mostly from the 1950s, shows 
            arc-shaped ridges and a 130-meter-deep depression in the center of the ring.  Both are clues that the 
            volcanoes are connected by one big caldera, a massive crater that forms when a very large magma chamber in 
            a volcano explodes and empties.</p>

            <p>Gravity data from satellites echo the look of other calderas. And analysis of such volcanic gases such 
            as sulfur dioxide, as well as patterns of microearthquakes also suggest the presence of a caldera.</p>
            `,
            sourceOrigin: 'www.sciencenews.org',
            relativePostId: [2]
        }
    }
]