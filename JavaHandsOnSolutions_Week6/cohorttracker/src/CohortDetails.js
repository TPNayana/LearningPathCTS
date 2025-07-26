import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module

function CohortDetails(props) {
  // Determine the color based on 'currentStatus' (case-sensitive: 'Ongoing' from your data)
  const statusColor = props.cohort.currentStatus === 'Ongoing' ? 'green' : 'blue';

  return (
    // Apply the 'box' class from your CSS Module
    <div className={styles.box}>
      <dl>
        {/* Combine cohortCode and technology for Cohort Name and apply status color */}
        <dt>Cohort Name:</dt>
        <dd style={{ color: statusColor }}>{props.cohort.cohortCode} - {props.cohort.technology}</dd>

        {/* Display Start Date */}
        <dt>Started On:</dt>
        <dd>{props.cohort.startDate}</dd>

        {/* Display Current Status with conditional color */}
        <dt>Current Status:</dt>
        {/* Using h3 for bolding as per image, with inline display to keep it next to label */}
        <dd><h3 style={{ color: statusColor, display: 'inline' }}>{props.cohort.currentStatus}</h3></dd>

        {/* Display Coach Name */}
        <dt>Coach:</dt>
        <dd>{props.cohort.coachName}</dd>

        {/* Display Trainer Name */}
        <dt>Trainer:</dt>
        <dd>{props.cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;