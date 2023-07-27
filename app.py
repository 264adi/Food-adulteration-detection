import cv2
import numpy as np
import base64
import datetime
from flask import Flask, render_template, Response, jsonify

app = Flask(_name_)

def detect_adulteration():
    # Create a VideoCapture object to access the camera
    cap = cv2.VideoCapture(0)

    while True:
        # Capture a frame from the camera
        ret, frame = cap.read()

        # Convert the frame to HSV color space
        hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        # Define color ranges for different contaminants
        red_lower_bound = np.array([0, 120, 70])       # Red color range
        red_upper_bound = np.array([10, 255, 255])
        
        blue_lower_bound = np.array([100, 100, 50])    # Blue color range
        blue_upper_bound = np.array([140, 255, 255])
        
        green_lower_bound = np.array([40, 40, 40])     # Green color range
        green_upper_bound = np.array([80, 255, 255])
        
        yellow_lower_bound = np.array([20, 100, 100])  # Yellow color range
        yellow_upper_bound = np.array([40, 255, 255])

        # Create masks for different contaminants
        red_mask = cv2.inRange(hsv_frame, red_lower_bound, red_upper_bound)
        blue_mask = cv2.inRange(hsv_frame, blue_lower_bound, blue_upper_bound)
        green_mask = cv2.inRange(hsv_frame, green_lower_bound, green_upper_bound)
        yellow_mask = cv2.inRange(hsv_frame, yellow_lower_bound, yellow_upper_bound)

        # Calculate the percentage of adulteration for each contaminant
        total_pixels = red_mask.shape[0] * red_mask.shape[1]
        red_adulteration_pixels = np.count_nonzero(red_mask)
        blue_adulteration_pixels = np.count_nonzero(blue_mask)
        green_adulteration_pixels = np.count_nonzero(green_mask)
        yellow_adulteration_pixels = np.count_nonzero(yellow_mask)

        red_percentage_adulteration = (red_adulteration_pixels / total_pixels) * 100
        blue_percentage_adulteration = (blue_adulteration_pixels / total_pixels) * 100
        green_percentage_adulteration = (green_adulteration_pixels / total_pixels) * 100
        yellow_percentage_adulteration = (yellow_adulteration_pixels / total_pixels) * 100

        # Show the original frame and masks for different contaminants
        cv2.imshow("Original Frame", frame)
        cv2.imshow("Red Contaminant Mask", red_mask)
        cv2.imshow("Blue Contaminant Mask", blue_mask)
        cv2.imshow("Green Contaminant Mask", green_mask)
        cv2.imshow("Yellow Contaminant Mask", yellow_mask)

        # Press 'q' to exit the loop and stop capturing
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the camera and close OpenCV windows
    cap.release()
    cv2.destroyAllWindows()

    return red_percentage_adulteration, blue_percentage_adulteration, green_percentage_adulteration, yellow_percentage_adulteration


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/info')
def info():
    return render_template('Info.html')

@app.route('/disease')
def disease():
    return render_template('Disease.html')


@app.route('/contamination')
def index():
    red_percentage, blue_percentage, green_percentage, yellow_percentage = detect_adulteration()
    current_datetime = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return render_template('contamination.html', datetime=current_datetime,
    red_percentage=red_percentage, blue_percentage=blue_percentage,
    green_percentage=green_percentage, yellow_percentage=yellow_percentage)

    # Render the 'index.html' template and pass the results to it
    return render_template('contamination.html', results=results)


if _name_ == '_main_':
    app.run(debug=True)
