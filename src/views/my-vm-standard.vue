<template>
  <div>
    <GoHome></GoHome>
    <h1>
      <span>My recommended standard when testing beta versions of Windows</span>
    </h1>
    <div class="large">
      <p>
        I was also in that background where I no longer knew whether to test the
        betas as 16 colors or force myself to emulate it with PCem, or run the
        beta without Aero or special graphic features, even without a network,
        but here I will be recompiling which virtualizers to use when testing
        certain Windows builds.
      </p>
      <p>
        For me, having a pleasant speed, and having all the features of the
        operating system active, is the best way to test a beta version of
        Windows (hardware specific tests do not enter here), so here is the
        list.
      </p>
    </div>
    <ul id="list">
      <li><span>Windows NT 3.1 RTM, Windows NT 3.50 and 3.51 RTM</span></li>
      <br />
      <div class="large">
        I recommend using VirtualBox, using OS Windows NT 3.x.<br /><br />If for
        some reason it fails, use Other Windows (32-bit).<br /><br />No, giving
        them specific names doesn't help.<br /><br />Use the VirtualBox video
        driver that is compatible from NT 3.1 to Windows 7.
      </div>
      <br /><br />
      <li>
        <span
          >Windows 9x versions less than Windows 95 B, Windows NT versions less
          than NT 4.0</span
        >
      </li>
      <br />
      <div class="large">
        For 16-bit versions: I only know that Virtual PC 2007 can run on certain
        versions, if in any case something fails you should use an emulator like
        PCem.<br /><br />
        For 32-bit versions (NT): I recommend VirtualBox, use the video driver
        that is compatible from NT 3.1 to Windows 7.
      </div>
      <br /><br />
      <li><span>Windows 95 version B or major</span></li>
      <br />
      <div class="large">
        I recommend VMware, with the default settings.<br /><br />
        Get sound with setting the sound adapter to SoundBlaster 16.<br /><br />
        VM Tweaker:
        <a
          href="https://sourceforge.net/projects/vmtweaker/files/latest/download"
          target="_blank"
          >https://sourceforge.net/projects/vmtweaker/files/latest/download</a
        >
      </div>
      <br /><br />
      <li><span>Windows 98 build 4.10.1691.3 or minor</span></li>
      <br />
      <div class="large">
        I recommend VirtualBox, use it with Legacy virtualization mode without
        Nested Paging, with OS Windows 95, and without enabling ACPI, everything
        else by default.<br /><br />You can get 32-bit mode with a generic VESA
        driver.<br /><br />Disable ACPI on VirtualBox:
        <span class="code">VBoxManage modifyvm "myname" --acpi off</span>
      </div>
      <br /><br />
      <li><span>Windows 98 build 4.10.1702 or major</span></li>
      <br />
      <div class="large">
        I recommend VMware, with the default settings.<br /><br />Remember the
        driver that had to be installed manually with Windows 95? Use that to
        get 32-bit mode.<br /><br />
        Get sound with setting the sound adapter to SoundBlaster 16.
      </div>
      <br /><br />
      <li><span>Windows 2000 (any beta)</span></li>
      <br />
      <div class="large">
        It will depend on the build. Some builds work with VMware with 6.5-7.x
        compatibility mode without ACPI, if this is the case:<br /><br />
        -> Use the video driver that Windows NT 4.0 uses.<br />
        -> Use the VMware 6.5 drivers.<br /><br />
        If it fails with VMware, use VirtualBox (if it fails, without enabling
        ACPI, see
        <a
          href="https://www.betaarchive.com/forum/viewtopic.php?p=448150#p448150"
          target="_blank"
          >here</a
        >), everything else by default.<br /><br />Use the VirtualBox video
        driver that is compatible from NT 3.1 to Windows 7.<br /><br />Disable
        ACPI on VMware (Put this in the last line of the VM's .vmx):
        <span class="code">acpi.present = "FALSE"</span>
      </div>
      <br /><br />
      <li><span>Windows Neptune, Windows Whistler (any beta)</span></li>
      <br />
      <div class="large">
        I recommend VMware, with VMware 6.5-7.x support, with the default
        settings, and disabling ACPI if installation fails.<br /><br />Get
        32-bit mode and sound with VMware 7.0 drivers.
      </div>
      <br /><br />
      <li><span>Windows Longhorn (any beta)</span></li>
      <br />
      <div class="large">
        I recommend VMware.<br /><br />
        Get sound with VMware 7.0 drivers
        <br><br>
        For the pre-reset builds, with VMware 6.5-7.x support, with the default
        settings.<br /><br />Get special features with VMware 6.5.2 drivers<br /><br />More
        information here:
        <a href="https://longhorn.ms/desktop-compositing/" target="_blank"
          >https://longhorn.ms/desktop-compositing/</a
        >
        <br /><br />
        For the post-reset builds: with VMware 10.x support, with the default
        settings.<br /><br />
        Get special features with VMware 11.x drivers.<br /><br />More
        information here:
        <a
          href="https://www.betaarchive.com/forum/viewtopic.php?t=34077"
          target="_blank"
          >https://www.betaarchive.com/forum/viewtopic.php?t=34077</a
        >
      </div>
      <br /><br />
      <li><span>Windows 7 (any beta)</span></li>
      <br />
      <div class="large">
        I recommend VMware, with VMware 10.x support, with the default
        settings.<br /><br />I have not tried Aero on this OS yet but I see that
        with the 11.x drivers it should work. I will see that soon.
      </div>
      <br /><br />
      <li><span>Windows 8 and 10 (any beta)</span></li>
      <br />
      <div class="large">
        With the exception of the Windows 8 builds that still have Aero, use
        VMware, with VMware 10.x support, with the default settings, using the
        11.x drivers.<br /><br />After that, I don't think it makes sense to
        recommend virtualizers, after all they are recent systems, and any
        virtualizer should run them.<br /><br />If you still want my opinion,
        use VMware with the default options.
      </div>
      <br /><br />
    </ul>
  </div>
</template>

<style>
.large {
  border-radius: 5px;
  padding: 10px;
  background-color: #00ffbbdb;
  background-size: 100%;
  font-size: 20px !important;
}
.code {
  border-radius: 5px;
  background-color: rgb(177, 0, 0);
  color: #fff;
}
@media only screen and (max-width: 1024px) {
  #list {
    margin-left: -30px;
  }
}
</style>

<script>
import GoHome from "@/components/go-home.vue";
export default {
  name: "my-vm-standard",
  components: { GoHome },
};
</script>