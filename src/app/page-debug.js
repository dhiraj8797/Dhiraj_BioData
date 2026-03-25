export default function DebugPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center", backgroundColor: "#fbf7f0" }}>
      <h1 style={{ color: "#b88a6a", fontSize: "36px", marginBottom: "20px" }}>
        Dhiraj Kumar - Debug Page
      </h1>
      
      <div style={{ marginBottom: "30px" }}>
        <img 
          src="/images/profile-photo.jpg" 
          alt="Dhiraj Kumar" 
          style={{ 
            width: "300px", 
            height: "375px", 
            objectFit: "cover",
            borderRadius: "20px",
            border: "4px solid #d4a574"
          }}
          onError={(e) => {
            e.target.style.border = "4px solid red";
            e.target.alt = "PHOTO NOT FOUND";
          }}
        />
      </div>
      
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
        <h2 style={{ color: "#2d2a26", marginBottom: "10px" }}>Status Check:</h2>
        <p style={{ color: "#6e655d" }}>✓ If you see your photo above - images work</p>
        <p style={{ color: "#6e655d" }}>✓ If styling is visible - CSS works</p>
        <p style={{ color: "#6e655d" }}>✓ This page loads - basic setup works</p>
      </div>
      
      <div>
        <h3 style={{ color: "#b88a6a", marginBottom: "10px" }}>Gallery Photos Test:</h3>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
          <img src="/images/gallery/Screenshot 2026-03-25 163530.png" alt="Gallery 1" style={{ width: "100px", height: "125px", objectFit: "cover", borderRadius: "10px" }} />
          <img src="/images/gallery/Screenshot 2026-03-25 163552.png" alt="Gallery 2" style={{ width: "100px", height: "125px", objectFit: "cover", borderRadius: "10px" }} />
          <img src="/images/gallery/Screenshot 2026-03-25 163708.png" alt="Gallery 3" style={{ width: "100px", height: "125px", objectFit: "cover", borderRadius: "10px" }} />
        </div>
      </div>
    </div>
  );
}
