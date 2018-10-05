Short description how to use temlates on server-side

template html files should contain only <div data-role="post-content"> ... </div>

Script for replacement text values shows what actions are neccessary before sending request.
Response should consist only html code without script for replacement. some scripts for view part a placed ib a bottom of a replacemet script, but in comments you can see place, where this script shuold be.

For preventing errors I propose rename all id and classes (class="`post-item-${new Date()}`" or id="`wrapper-${new Date()}`") 

"libs" directory should be static and all links in templates should be replaced to correct.
