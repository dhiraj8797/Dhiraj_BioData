"use client";

export default function MinimalPage() {
  return (
    <main>
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ 
          fontSize: "48px", 
          color: "#b88a6a",
          fontFamily: "Playfair Display, serif",
          marginBottom: "20px"
        }}>
          Dhiraj Kumar
        </h1>
        <p style={{ fontSize: "20px", color: "#2d2a26", marginBottom: "40px" }}>
          Software Tester at Capgemini
        </p>
        
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          <h2 style={{ color: "#b88a6a", marginBottom: "20px" }}>About Me</h2>
          <p style={{ lineHeight: "1.6", color: "#6e655d" }}>
            I am a simple, grounded, and family-oriented individual who values honesty, respect, and meaningful relationships. 
            I have a passion for cooking and enjoy preparing meals for my loved ones. Traveling is something I deeply enjoy, 
            as it allows me to explore new places and experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
