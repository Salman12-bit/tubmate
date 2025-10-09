"use client"

import './download.css';
import Link from 'next/link'

export default function DownloadPage() {
  return (
    <section className="download-page">
      <h2 className="download-title">Download Vedu APK</h2>

      <div className="download-logo">
        <img
          src="https://veduapp.cc/uploads/vedu-icon.webp" 
          alt="Vedu App Logo"
        />
      </div>

      <table className="app-info-table">
        <tbody>
          <tr>
            <td>App Name</td>
            <td>Vedu App</td>
          </tr>
          <tr>
            <td>Version</td>
            <td>Latest</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>33 MB</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>Entertainment App</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>2 Hour Ago</td>
          </tr>
        </tbody>
      </table>

      <div className="download-btn-container">
        <a href="#" className="download-btn">
          <p className="download-icon" /> Download Vedu App Update Version
        </a>
      </div>
    </section>
  );
}


