export default function CSSTestPage() {
  return (
    <div style={{ 
      padding: "40px", 
      textAlign: "center",
      backgroundColor: "#fbf7f0",
      color: "#2d2a26",
      fontFamily: "Inter, sans-serif"
    }}>
      <h1 style={{ 
        fontSize: "48px", 
        color: "#b88a6a",
        fontFamily: "Playfair Display, serif",
        marginBottom: "20px"
      }}>
        CSS Test Page
      </h1>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}>
        <p>If you see styled elements with:</p>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <li>Beige background</li>
          <li>Gold title text</li>
          <li>Glass card effect</li>
          <li>Inter font for body</li>
          <li>Playfair Display for heading</li>
        </ul>
        <p style={{ marginTop: "20px", color: "#6e655d" }}>
          Then CSS is working properly!
        </p>
      </div>
    </div>
  );
}
