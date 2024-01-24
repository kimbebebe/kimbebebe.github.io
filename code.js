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
            "I like the Norfolk beaches.",
            "It's 9000 miles back to you",
            "Hello there! :)",
            "If it's the worst day of your life, then tomorrow can only be better",
            "Refresh the page! These change!",
            "I like storms and planes",
            "I like challenging myself!",
            "Welcome, traveller!",
            "Why do Americans call them 'English muffins'?",
            "You found me!",
            "I'm not a graphics designer, but I tried!",
            "Do you like chocolate pizza?",
            "Welcome to my personal website!"]

            document.getElementById("picker").innerHTML = PickThought(thoughts);