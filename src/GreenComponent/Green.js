import React from 'react';

const Green = () => {
    // Define the styles for the component
    const containerStyle = {
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'silver',
        backgroundImage: `url('/green.png')`,
        position: 'relative', // Set position relative for absolute positioning of text
        overflow: 'hidden' // Hide overflow to prevent scrollbars
    };

    const scrollingTextStyle = {
        position: 'absolute', // Position it absolutely to allow scrolling
        bottom: '0', // Start from the bottom
        width: '100%', // Full width
        textAlign: 'center', // Center the text horizontally
        whiteSpace: 'nowrap', // Prevent text from wrapping
        animation: 'scrolling-text 50s linear infinite' // Apply the animation
    };

    const paragraphStyle = {
        fontSize: '24px', 
        lineHeight: '1.5', 
        margin: '0'
       };

    // Define the keyframes for the scrolling effect
    const keyframes = `
        @keyframes scrolling-text {
            0% {
                transform: translateY(100%); /* Start from below the viewport */
            }
            100% {
                transform: translateY(-100%); /* End above the viewport */
            }
        }
    `;

    // Create a style element to inject the keyframes
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    return (
        <div style={containerStyle}>
            <h1>What is Happiness?</h1>
            <div style={scrollingTextStyle}>
                <p style={paragraphStyle}>
                    One day you will realise this, that happiness <br />
                    was never about your job or your degree or being <br />
                    in a relationship. Happiness was never about following <br />
                    in the foot steps of all of those who came before <br />
                    you, it was never about being like the others. <br />
                    One day you're gonna see it that happiness was <br />
                    always about the discovery the hope listening to <br />
                    your heart and following it whatever it choose to <br />
                    go happiness. Happiness was always about being kind <br />
                    to yourself. It was always about embracing the person <br />
                    you were becoing. One day you wil understand that <br />
                    happiness was always about learning how to live <br />
                    with yourself, that your happiness was never in <br />
                    the hands of others. One day you will will realize <br />
                    that true happiness comes from within and no  <br />
                    extrnal factors can define it. <br />

                    Every Challege you face is an apportunity <br />
                    to grow. Life isn't about avoiding obstacles <br />
                    it's about learning to rise above them. <br />
                    You have the strength within you to handle <br />
                    whatever comes your way even when it feels <br />
                    overwhelming. Progress doesn't always happen <br />
                    overnight and that's okay. Take small steps <br />
                    forward everyday and eventually they will <br />
                    add up to something incredible. Your mindset <br />
                    shapes your reality. What you believe about <br />
                    yourself determines what you can achieve. <br />
                    Never doubt your potential even if the road <br />
                    gets tough. Belive in your dreams because <br />
                    if you don't no one else will. The journey <br />
                    may not be easy but it's in the struggles <br />
                    that you find your true strength. keep your <br />
                    vision clear, stay disciplined and don't let <br />
                    temporary setbacks define you. <br />
                    You are not your failures. You are the <br />
                    strength that rises after them. Trust yourself,<br />
                    stay patients and know that with every effort <br />
                    you are getting closer to your goals. Keep <br />
                    pushing. Your future self will thank you. <br />

                    Your journey is unique and every challenge <br />
                    you face is shaping you into a stronger <br />
                    more resilient version of yourself.<br />
                    Success isn't about never failing, <br />
                    it's about getting back up every time you fall.<br />
                    Don't let fear or doubt hold you back. <br />
                    Those are just steps on a path to grow. <br />
                    Stay focused on your goals, take small <br />
                    steps each day and trust the process. Remember <br />
                    your potential is limitless. You are capable of <br />
                    achieving greatness but it all starts with <br />
                    believing in yourself. Keep moving forward. <br />
                    
                    Your circle of friend is your secret weapon <br />
                    to success. Think about it, who do you hang <br />
                    out with most? are they dreamers or doubters, <br />
                    go getters or excuse makers? here's the truth, <br />
                    you become the average of the five people you spend <br />
                    the most time with. Scary right but here is the <br />
                    good news, you have the power to choose. Surround <br />
                    yourself with negative people and you'll find reasons <br />
                    why you can't. surround yourself with ambitions <br />
                    people and you'll find ways you can. I've seen it <br />
                    happen. When I upgraded my circle my whole life <br />
                    leveled up, my mindset shifted, my goals got bigger, <br />
                    my excusses got smaller. So here's your challenge <br />
                    seek out the winners, the hustlers, the optimist. <br />
                    Find people who make you think bigger and push you <br />
                    to be better. Remember iron sharpens iron. The right <br />
                    friends won't just support your dreams, they'll fuel <br />
                    them.<br />
                </p>
            </div>
        </div>
    );
};

export default Green;