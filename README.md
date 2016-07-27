I have taken a simple approach using basic html, css and jQuery. 
I considered using a framework like angularJS but decided that the simpler approach was best in this situation. 
The jQuery getJSON method is sufficient for what is required here. Although the code depends heavily on a consistent JSON format, this has not been changed by FourSquare for some time so the risk is negligible.
I also considered adding additional input fields for other FourSquare such as section or result limits but opted to leave these in the first iteration.
Additionally, in an ideal world the client keys would be pulled from a secure configurable source, potentially server side, but I believe this may be overkill for this demonstration.