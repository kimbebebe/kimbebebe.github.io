function PickThought(thoughts)
            {
                return thoughts[Math.floor(Math.random() * thoughts.length)]
            }

            var thoughts =
            ["Welcome to my website!",
            "Have you checked the weather?",
            "Make sure you look after yourself today!",
            "Tell someone you love them!",
            "Why does the alphabet start with A?",
            "Have you visited the beaches in North Norfolk?",
            "It's 9000 miles back to you",
            "Hello there! :)",
            "If it's the worst day of your life, then tomorrow can only be better",
            "Refresh the page! These change!",
            "Storm Éowyn (2024) reached windspeeds of 114mph in County Gallway, Ireland... Then the recording equipment broke!",
            "I like challenging myself!",
            "Welcome, traveller!",
            "Why do Americans call them 'English muffins'?",
            "You found me!",
            "I'm not a graphics designer, but I tried!",
            "Do you like chocolate pizza?",
            "Welcome to my personal website!",
            "I'm hungry..."]

            document.getElementById("picker").innerHTML = PickThought(thoughts);