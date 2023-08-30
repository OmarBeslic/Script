Image Format Conversion for Web Performance (Node.js)
This Node.js script is designed to recursively convert image files within a specified folder and its subfolders into the WebP format. The WebP format is optimized for web performance by offering better compression and quality compared to traditional image formats like PNG and JPEG.

Usage
Prerequisites: Make sure you have Node.js installed on your computer.

Clone Repository: Clone or download the repository containing the script files.

Install Dependencies: Open a terminal window and navigate to the folder containing the script. Run the following command to install the required dependencies:


npm install fs fs-jetpack webp-converter readline-sync
Run the Script: In the terminal, navigate to the script folder and execute the script using the following command:


node index.js
Input: You'll be prompted to enter the short code of the folder you want to scan for image files. Provide the short code and press Enter.

Conversion: The script will search for image files with extensions .png, .jpg, and .jpeg within the specified folder and its subfolders. It will then convert these image files to the WebP format with a quality of 90 using the webp-converter library.

Replacement (Optional): The script will also search for specific file types (.js, .jsx, .css, .scss) within the specified folder and its subfolders. If these files contain references to image extensions (.png, .jpg, .jpeg), the script will replace these references with .webp to match the converted files.

Output: The converted WebP images will be created in the same locations as the original images. The original images will be deleted after conversion. For files that underwent reference replacement, the script will update those files with the new extensions.

Note: Always backup your original image files and source code before running the script.

Script Explanation
The script uses the fs, fs-jetpack, webp-converter, and readline-sync libraries for file operations, image conversion, and user input.

The script starts by taking user input to specify the folder to scan.

It converts image files (.png, .jpg, .jpeg) to WebP format using the webp-converter library and deletes the original image files.

The script then walks through the specified folder and its subfolders, looking for specific file types (.js, .jsx, .css, .scss).

If these files contain references to image extensions (.png, .jpg, .jpeg), the script replaces these references with .webp.

The script outputs relevant messages to the console to indicate successful conversions and replacements.
