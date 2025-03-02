**Converting a static into a static with Wara Wara Plaza**

1. Open **LauncherBase.szs** > **LauncherBase.bflyt**

    ![image](imgs/statictowwp/s1.png)

2. Open RootPane and select **P_pict_0**

    ![image](imgs/statictowwp/s2.png)

3. Select Pane > Translate and change the Y axis to **-720**

    ![image](imgs/statictowwp/s3.png)
    ![image](imgs/statictowwp/s4.png)

4. Now drag **P_pict_0** into **N_PosRoot**

    ![image](imgs/statictowwp/s5.png)

5. Open Animation Hierarchy, we will just change a couple stuff on this 2 animations

    ![image](imgs/statictowwp/s6.png)

6. Open **LauncherBase_IconDrcOut** and change Key Frame 2's value to 1000 like the picture below

    ![image](imgs/statictowwp/s7.png)

    Do the same with **LauncherBase_IconTvOut** but in negative -1000

    ![image](imgs/statictowwp/s8.png)

    What we are doing here is:

    1. animating it so the top and bottom of the picture doesnt show on screen
    2. why negative? you can change it to possitive too, you can choose which direction you want to animate it, thats all on you

7. Save and test

<video controls>
<source src="../imgs/statictowwp/v1.mp4" type="video/mp4">
</video>
