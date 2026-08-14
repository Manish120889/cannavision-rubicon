import React from 'react';

export const TechnicalArchitectureCard: React.FC = () => {
  return (
    <div>
      <div className="card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
          Technical Architecture: Gesture Control vs. Rubicon Organics Plant Vision
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          This software maps gesture control computer vision paradigms directly to organic living soil cannabis cultivation at Rubicon Organics' Pacifica facility in Delta, BC.
        </p>

        <table className="comparison-table">
          <thead>
            <tr>
              <th>Pipeline Component</th>
              <th>Gesture Control Baseline</th>
              <th>Rubicon Organics CannaVision Platform</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Vision Sensor Stream</strong></td>
              <td>Webcam RGB feed targeting user hand movements.</td>
              <td>4K RTSP IP Cameras over Pacifica Facility hybrid greenhouse living soil benches.</td>
            </tr>
            <tr>
              <td><strong>2. ROI Isolation</strong></td>
              <td>Hand Bounding Box Isolation (MediaPipe 21 Keypoints).</td>
              <td>Living Soil Canopy & Pot Masking (HSV Foliage Segmentation + Background Subtraction).</td>
            </tr>
            <tr>
              <td><strong>3. Feature Vectors</strong></td>
              <td>Finger joint angles, tip distances, palm orientation vector.</td>
              <td>
                <ul>
                  <li>• <strong>Stage & Age Identification</strong> (Node spacing, pistil ratio)</li>
                  <li>• <strong>Chlorosis & Necrosis Index</strong> (Leaf yellowing/browning %)</li>
                  <li>• <strong>Sub-Clinical Micro-Velocity</strong> (Predicting 5-10 day outbreaks)</li>
                  <li>• <strong>Trichome Maturity Ratio</strong> (Clear / Cloudy / Amber)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>4. AI ML Model Engine</strong></td>
              <td>SVM / Neural Net Classifier for Hand Gestures.</td>
              <td>
                <ul>
                  <li>• <strong>YOLOv8-Seg</strong> for Powdery Mildew, Spider Mites, HpLVd.</li>
                  <li>• <strong>Vision Transformer (ViT)</strong> for organic quality index.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>5. Action & Compliance</strong></td>
              <td>Trigger UI Action (e.g. Next Slide).</td>
              <td>
                <ul>
                  <li>• <strong>FVOPA Organic Protocol</strong>: Release predatory mites (*Phytoseiulus persimilis*).</li>
                  <li>• <strong>Living Soil Sync</strong>: Soil moisture/microbial pH adjustments.</li>
                  <li>• <strong>Isolate / Cull Alert</strong> for Hop Latent Viroid (HpLVd).</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
